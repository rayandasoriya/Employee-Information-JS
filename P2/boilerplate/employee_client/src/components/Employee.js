import React, { Component } from 'react';
import Addemployee from './api/addemployee'
import { Route, Switch, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Contact from './api/employees'
import Modifyemployee from './api/modifyemployee'

class Contactapp extends Component {
  constructor(props) {
    super(props)
    this.state = { editcontact: "" }
  }

  statetransfer = (data) => {
    this.setState({ editcontact: data })
  }

  render() {
    return (
      <Router>
        <div className="contactnav" >
          <h1> Welcome to Employee Information Portal </h1>
          <div className="buttonform">
            <Link to="/api/employees"> <button type="button" class="btn btn-secondary">Employees List</button> </Link>
            <Link to="/api/addemployee"> <button type="button" class="btn btn-success" > Add an Employee</button> </Link>
          </div>

          <Switch>
            <Route exact path="/api/addemployee" render={() => <Addemployee />} />
            <Route exact path="/api/employees" render={() => <Contact transfer={this.statetransfer} />} />
            <Route exact path="/api/editcontact" render={() => <Modifyemployee edit={this.state.editcontact} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Contactapp;