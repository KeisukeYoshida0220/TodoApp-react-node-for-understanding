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
    loading: true,
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

      getUserData();

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

  const getUserData = async (data) => {
    const token = localStorage.getItem('token')

    if (token) {
      authToken(token);
    }

    try {
      const response = await axiosClient.get('api/auth')
      dispatch({
        type: GET_USER,
        payload: response.data.user,
      })

      console.log("きた?");
    } catch(e) {
      // statements
      console.log(e);
    }
  }

  const signInUser = async (data) => {
    try {
      const response = await axiosClient.post('api/auth', data)
      dispatch({
        type: SUCCESSFUL_LOGIN,
        payload: response.data,
      })
      getUserData();
      console.log('success');
    } catch(e) {
      // statements
      console.log(e);
    }
  }


  return(
    <AuthContext.Provider
    value={{
      token: state.token,
      isAuth: state.isAuth,
      user: state.user,
      // alertMessage: state.alertMessage,
      loading: state.loading,
      signUpUser,
      signInUser,
      getUserData,
      // logOut,
    }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;