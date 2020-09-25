import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AUTH_CANCELED } from '../store/types/authTypes';

const CheckVerification = () => {

  const { isAuthenticated, user } = useSelector(state => state.auth);
  const { push } = useHistory();
  const dispatch = useDispatch()

  useEffect(() => {
    if(isAuthenticated && user && !user.emailVerifiedAt){
      dispatch({type: AUTH_CANCELED})
      push('/confirmregistration');
    }
  }, [isAuthenticated, user, push, dispatch])
}

export default CheckVerification

