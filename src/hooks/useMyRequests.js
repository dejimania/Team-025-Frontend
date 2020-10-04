import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_ERROR } from "../store/types/notificationTypes";
import { MYREQUESTS_RESOLVE, MYREQUEST_FETCH } from "../store/types/myRequestsTypes";
import { serverRequest } from "../utils/serverRequest";

const useMyRequests = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useRef(false);

  const { token } = useSelector((state) => state.auth);
  const { myRequests } = useSelector((state) => state.myRequests);

  const dispatch = useDispatch();

  useEffect(() => {
    isMounted.current = true;
    const getRequest = async () => {
      try {
        setIsLoading(true);
        dispatch({ type: MYREQUEST_FETCH });
        const endpoint = `${process.env.REACT_APP_API}/request`;
        const response = await serverRequest(token).get(endpoint);
        if (isMounted.current) {
          dispatch({
            type: MYREQUESTS_RESOLVE,
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

  return { isLoading, myRequests };
};

export default useMyRequests;
