import React, { Component } from 'react';
import Addemployee from './api/addemployee'
import { Route, Switch, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Employee from './api/employees'
import Modifyemployee from './api/modifyemployee'
import DisplayEmployee from './api/displayemployee'

class EmployeeApp extends Component {
  constructor(props) {
    super(props)
    this.state = { editemployee: "" }
  }

  statetransfer = (data) => {
    this.setState({ editemployee: data })
  }

  render() {
    return (
      <Router>
        <div className="employeenav" >
          <h1> Welcome to Employee Information Portal </h1>
          <div className="buttonform">
            <Link to="/api/employees"> <button type="button" class="btn btn-secondary">Employees List</button> </Link>
            <Link to="/api/addemployee"> <button type="button" class="btn btn-success" > Add an Employee</button> </Link>
          </div>

          <Switch>
            <Route exact path="/api/addemployee" render={() => <Addemployee />} />
            <Route exact path="/api/employees" render={() => <Employee transfer={this.statetransfer} />} />
            <Route exact path="/api/displayemployee" render={() => <DisplayEmployee display={this.state.editemployee} />} />
            <Route exact path="/api/editemployee" render={() => <Modifyemployee edit={this.state.editemployee} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default EmployeeApp;