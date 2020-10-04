import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { REQUEST_FETCH, REQUEST_RESOLVE } from "../store/types/requestsTypes";
import { SET_ERROR } from "../store/types/notificationTypes";
import { serverRequest } from "../utils/serverRequest";

const useRequest = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useRef(false);

  const { token } = useSelector((state) => state.auth);
  const { request } = useSelector((state) => state.requests);

  const dispatch = useDispatch();
  const { requestId } = useParams();

  useEffect(() => {
    isMounted.current = true;
    const getRequest = async () => {
      try {
        setIsLoading(true);
        dispatch({ type: REQUEST_FETCH });
        const endpoint = `${process.env.REACT_APP_API}/request/public/${requestId}`;
        const response = await serverRequest(token).get(endpoint);
        if (isMounted.current) {
          dispatch({
            type: REQUEST_RESOLVE,
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
  }, [token, dispatch, requestId]);

  return { isLoading, request };
};

export default useRequest;
