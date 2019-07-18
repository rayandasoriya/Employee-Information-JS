import React, { Component } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";

class Addemployee extends Component {
  constructor(props) {
    super(props)
    this.state = { fname: "", lname: "", hireDate: "", role: "", quote1: "", quote2: "" }
  }

  changehandle = (event) => {
    axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes").then((res1) => this.setState({ quote1: res1.data[0] })).then(
      axios.get("https://quotes.rest/qod").then((res2) => this.setState({ quote2: res2.data['contents']['quotes'][0]['quote'] }))).then(
        this.setState({ [event.target.name]: event.target.value }
        ))
  }
  postdata = (e) => {
    console.log(this.state.hireDate);
    const date1 = new Date();
    const date2 = new Date(this.state.hireDate);
    if(date2.getTime()>date1.getTime()){
      alert("Time must be in past")
      e.preventDefault()
    }
    
    else if (!this.state.fname.length || !this.state.lname.length || !this.state.hireDate.length || !this.state.role.length) {
      alert("No empty input accepted")
      e.preventDefault()
    }

    else {      
        axios.post('/addcontact', { ...this.state })
        .then((res) => alert('Emloyee Added'))
        .catch(err => alert("cant send data"))
  }
}

  render() {
    return (
      <div className="contactadd"   >
        <h2 > Add an Employee </h2>
        <form  >
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="fname" className="form-control"  placeholder="Enter First Name" onChange={this.changehandle} />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="lname" className="form-control" placeholder="Enter Last Name" onChange={this.changehandle} />
          </div>
          <div className="form-group">
            <label>Hire Date</label>
            <input type="date" name="hireDate" className="form-control" onChange={this.changehandle} />
          </div>
          <div className="form-group">
            <label>Role</label>
            <select className="form-control" name="role" onChange={this.changehandle}>
              <option value="" >Select Role</option>
              <option value="LACKEY">LACKEY</option>
              <option value="CEO">CEO</option>
              <option value="VP">VP</option>
              <option value="MANAGER">MANAGER</option>
            </select>
          </div>
          <Link to='/api/employees'> <button type="submit" className="btn btn-primary" onClick={this.postdata} > Submit</button> </Link>
        </form>
      </div>
    );
  }
}

export default Addemployee;