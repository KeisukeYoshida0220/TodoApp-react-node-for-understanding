import {
  SUCCESSFUL_SIGNUP,
  SIGNUP_FAILED,
  GET_USER,
  SUCCESSFUL_LOGIN,
  LOGIN_FAILED,
  LOG_OUT,
} from '../../types';

export default (state, action) => {

  switch (action.type){
    case SUCCESSFUL_LOGIN:
    case SUCCESSFUL_SIGNUP:

    localStorage.setItem('token', action.payload.token);
    return{
      ...state,
      isAuth: true,
    }

    case GET_USER:
    return{
      ...state.user,
      isAuth: true,
      user: action.payload
    }
  }
}