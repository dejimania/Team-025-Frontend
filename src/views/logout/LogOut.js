import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_CANCELED } from '../../store/types/authTypes';

const LogOut = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.auth)
  useEffect(() => {
    if(isAuthenticated){
      dispatch({type: AUTH_CANCELED})
    }
  }, [dispatch, isAuthenticated])

  return (
    <div>
      <Redirect to="/signin"/>
    </div>
  )
}

export default LogOut

