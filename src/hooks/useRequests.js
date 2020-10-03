import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REQUESTS_RESOLVE, REQUEST_FETCH } from "../store/types/requestsTypes";
import { SET_ERROR } from "../store/types/notificationTypes";
import { serverRequest } from "../utils/serverRequest";

const useRequests = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useRef(false);

  const { token } = useSelector((state) => state.auth);
  const { requests } = useSelector((state) => state.requests);

  const dispatch = useDispatch();

  useEffect(() => {
    isMounted.current = true;
    const getRequest = async () => {
      try {
        setIsLoading(true);
        dispatch({ type: REQUEST_FETCH });
        const endpoint = `${process.env.REACT_APP_API}/request/public`;
        const response = await serverRequest(token).get(endpoint);
        if (isMounted.current) {
          dispatch({
            type: REQUESTS_RESOLVE,
            payload: response.data.data
          });
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted.current) {
          dispatch({ type: SET_ERROR, payload: error });
          setIsLoading(false);
        }
      }
    };
    getRequest();
    return () => {
      isMounted.current = false;
    };
  }, [token, dispatch]);

  return { isLoading, requests };
};

export default useRequests;
