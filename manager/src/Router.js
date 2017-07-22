 import React from 'react';

import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

// attribute initial will display first scene
//<Scene key="employeeList" component={EmployeeList} title="Employee" initial />

//This way to remove back button
//<Scene key="main">
//  <Scene key="employeeList" component={EmployeeList} title="Employee"  />
//</Scene>

//Test onRight Click
//<Scene
//  onRight={() => console.log('right!!!')}
//  rightTitle="Add"
//  key="employeeList"
//  component={EmployeeList}
//  title="Employee"  />
const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle="Add"
          key="employeeList"
          component={EmployeeList}
          title="Employee"
          initial
        />
        <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
        <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
