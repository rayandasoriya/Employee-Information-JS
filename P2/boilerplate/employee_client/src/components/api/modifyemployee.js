import React, { Component } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";


class Modifyemployee extends Component {
  constructor(props) {
    super(props)
    this.state = { fname: this.props.edit.fname, lname: this.props.edit.lname, hireDate: this.props.edit.hireDate, role: this.props.edit.role, quote1: this.props.edit.quote1, quote2: this.props.edit.quote2 }
  }

  changehandle = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  updateEmployee = (e) => {
    const date1 = new Date();
    const date2 = new Date(this.state.hireDate);
    if (date2.getTime() > date1.getTime()) {
      alert("Time must be in past")
      e.preventDefault()
    }

    else if (!this.state.fname.length || !this.state.lname.length || !this.state.hireDate.length || !this.state.role.length) {
      alert("No empty input accepted")
      e.preventDefault()
    }

    else {
      axios.put(`/modifyemployee/${this.props.edit._id}`, { ...this.state })
        .then((res) => console.log('Employee Modified'))
        .catch(err => console.log(err))
    }
  }


  render() {
    return (

      <div className="employeeadd"   >
        <h2 > Update Employee </h2>
        <form  >
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="fname" value={this.state.fname} className="form-control" placeholder="Enter First Name" onChange={this.changehandle} />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="lname" value={this.state.lname} className="form-control" placeholder="Enter Last Name" onChange={this.changehandle} />
          </div>
          <div className="form-group">
            <label>Hire Date</label>
            <input type="date" name="hireDate" value={this.state.hireDate} className="form-control" onChange={this.changehandle} />
          </div>

          <div className="form-group">
            <label>Role</label>
            <select className="form-control" name="role" value={this.state.role}  onChange={this.changehandle}>
              <option value="" >Select Role</option>
              <option value="LACKEY">LACKEY</option>
              <option value="CEO">CEO</option>
              <option value="VP">VP</option>
              <option value="MANAGER">MANAGER</option>
            </select>
          </div>

          <Link to='/api/employees'> <button type="submit" className="btn btn-primary" onClick={this.updateEmployee} > Edit </button> </Link>
        </form>
      </div>
    );
  }
}

export default Modifyemployee;