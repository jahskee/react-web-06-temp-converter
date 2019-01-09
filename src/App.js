import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import './App.scss';

import TeacherPage from "./components/screens/teacher-page/TeacherPage";
import StudentPage from "./components/screens/student-page/StudentPage";


class App extends Component {

  render() {
    return (
      <div className="App" style={{margin: "20px"}}>
        <h1>Temperature Conversion</h1>
         <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>

          < NavLink to="/flexion/teacher" activeStyle={{ color: "red" }} style={{paddingRight: "10px"}}>
              Teacher Page
          </NavLink>
          < NavLink to="/flexion/student" activeStyle={{ color: "red" }}>
              Student Page
          </NavLink>
        </div>

          <main>
          <Switch>
            <Route exact path="/flexion/teacher" component={TeacherPage} />
            <Route exact path="/flexion/student" component={StudentPage} />         
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
