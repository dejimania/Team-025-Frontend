import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const CheckRegistration = () => {

  const { isAuthenticated, user } = useSelector(state => state.auth);
  const { push } = useHistory();

  useEffect(() => {
    if(isAuthenticated && user && !user.phone){
      push('/completeregistration');
    }
  }, [isAuthenticated, user, push])
}

export default CheckRegistration

