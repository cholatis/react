import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
 } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
 };

export default (state = INITIAL_STATE, action) => {
  //console.log(action); //for display log in case of type each character

  switch (action.type) {
    case EMAIL_CHANGED:
      /*state.email = action.payload;
      return state;*/
      // all properties of state object then define property email override in state
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      /* same as initial state
      return { ...state,
        user: action.payload,
        error: '',
        loading: false,
        email: '',
        password: ''
      };
      */
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};
