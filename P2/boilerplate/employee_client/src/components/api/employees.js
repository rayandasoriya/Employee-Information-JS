import React, { Component } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";

class Contactlist extends Component {
  constructor(props) {
    super(props)
    this.state = { contactlist: [] }
  }

  componentDidMount() {
    axios.get('/contactlist')
      .then(res => this.setState({ contactlist: res.data }))
      .catch(err => alert("Employee cant be added"))
  }

  removecontact = (id) => {
    axios.delete(`/removecontact/${id}`)
      .then(() => console.log("Employee removed"))
      .catch(err => alert("Employee cant be removed"))
  }

  componentDidUpdate() {
    axios.get('/contactlist')
      .then(res => this.setState({ contactlist: res.data }))
      .catch(err => alert("Employee cant be added"))
  }

  onclickedit = (content) => {
    this.props.transfer({ _id: content._id, fname: content.fname, lname: content.lname, hireDate: content.hireDate, role: content.role, quote1: content.quote1, quote2: content.quote2 })
  }

  render() {
    return (
      <div className="contactlist">

        {this.state.contactlist.map(content => <div className="card" style={{ width: "420px" }}>
          <div className="card-body">
            <p className="card-text">Name : {content.fname} {content.lname} </p>
            <p className="card-text">Hire Date : {content.hireDate} </p>
            <p className="card-text">Role : {content.role} </p>
            <p className="card-text">Quote 1: {content.quote1} </p>
            <p className="card-text">Quote 2 : {content.quote2} </p>
            <div class="buttoncard">
              <button type="button" class="btn btn-danger" onClick={() => this.removecontact(content._id)}>Delete</button>
              <Link to="/api/editcontact" ><button type="button" class="btn btn-warning" onClick={() => this.onclickedit(content)}> Edit</button> </Link>
            </div>
          </div>
        </div>)}
      </div>
    );
  }
}

export default Contactlist;