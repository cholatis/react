import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

// should have default value to return
// banana: () => []
export default combineReducers({
  //banana: () => []
  auth: AuthReducer
});
