import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

// should have default value to return
// banana: () => []
export default combineReducers({
  //banana: () => []
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer
});
