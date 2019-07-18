import React, { Component } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";

class EmployeeList extends Component {
  constructor(props) {
    super(props)
    this.state = { employeelist: [] }
  }

  componentDidMount() {
    axios.get('/employeelist')
      .then(res => this.setState({ employeelist: res.data }))
      .catch(err => alert("Employee cant be added"))
  }

  removeEmployee = (id) => {
    axios.delete(`/removeemployee/${id}`)
      .then(() => console.log("Employee removed"))
      .catch(err => alert("Employee cant be removed"))
  }

  componentDidUpdate() {
    axios.get('/employeelist')
      .then(res => this.setState({ employeelist: res.data }))
      .catch(err => alert("Employee cant be added"))
  }

  onclickedit = (content) => {
    this.props.transfer({ _id: content._id, fname: content.fname, lname: content.lname, hireDate: content.hireDate, role: content.role, quote1: content.quote1, quote2: content.quote2 })
  }
  onclickview = (content) => {
    this.props.transfer({ _id: content._id, fname: content.fname, lname: content.lname, hireDate: content.hireDate, role: content.role, quote1: content.quote1, quote2: content.quote2 })
  }
  render() {
    return (
      <div className="employeelist">

        {this.state.employeelist.map(content => <div className="card" style={{ width: "420px" }}>
          <div className="card-body">
            <p className="card-text"><b>Name: </b>{content.fname} {content.lname} </p>
            <p className="card-text"><b>Hire Date: </b>{content.hireDate} </p>
            <p className="card-text"><b>Role: </b>{content.role} </p>
            <p className="card-text"><b>Quote 1: </b>{content.quote1} </p>
            <p className="card-text"><b>Quote 2: </b>{content.quote2} </p>
            <div class="buttoncard">
              <Link to="/api/displayemployee" ><button type="button" class="btn btn-primary" onClick={() => this.onclickview(content)}>View</button> </Link>
              <Link to="/api/editemployee" ><button type="button" class="btn btn-warning" onClick={() => this.onclickedit(content)}>Edit</button> </Link>
              <button type="button" class="btn btn-danger" onClick={() => this.removeEmployee(content._id)}>Delete</button>
            </div>
          </div>
        </div>)}
      </div>
    );
  }
}

export default EmployeeList;