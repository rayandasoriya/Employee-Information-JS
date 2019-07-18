import React, { Component } from 'react';

class DisplayEmployee extends Component {
  constructor(props) {
    super(props)
    this.state = { fname: this.props.display.fname, lname: this.props.display.lname, hireDate: this.props.display.hireDate, role: this.props.display.role, quote1: this.props.display.quote1, quote2: this.props.display.quote2 }
  }

  render() {
    return (
    <div className="employeelist">
        <div className="card" style={{ width: "420px" }}>
            <div className="card-body">
                <p className="card-text"><b>Name: </b>{this.state.fname} {this.state.lname} </p>
                <p className="card-text"><b>Hire Date: </b>{this.state.hireDate} </p>
                <p className="card-text"><b>Role: </b>{this.state.role} </p>
                <p className="card-text"><b>Quote 1: </b>{this.state.quote1} </p>
                <p className="card-text"><b>Quote 2: </b>{this.state.quote2} </p>
            </div>
        </div>
    </div>
    );
  }
}

export default DisplayEmployee;