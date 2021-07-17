import React, {useReducer} from 'react';
import axiosClient from '../../config/axios';
import authToken from '../../config/token';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import {
  SUCCESSFUL_SIGNUP,
  SIGNUP_FAILED,
  GET_USER,
  SUCCESSFUL_LOGIN,
  LOGIN_FAILED,
  LOG_OUT,
} from '../../types';


const AuthState = (props) => {

  const initialState = {
    token: localStorage.getItem('token'),
    isAuth: null,
    user: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const signUpUser = async (data) => {
    try {
      const response = await axiosClient.post('api/users', data);
      alert(data);

      dispatch({
        type: SUCCESSFUL_SIGNUP,
        payload: response.data,
      });

      alert("push");
      console.log(data);
      // statements
    } catch (error) {
      // statements
      console.log(error);
      // dispatch({
      //   type: SIGNUP_FAILED,
      // });
    }
  };


  return(
    <AuthContext.Provider
    value={{
      token: state.token,
      isAuth: state.isAuth,
      user: state.user,
      // alertMessage: state.alertMessage,
      // loading: state.loading,
      signUpUser,
      // logInUser,
      // getUserData,
      // logOut,
    }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;