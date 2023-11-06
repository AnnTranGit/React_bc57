import React, { Component } from "react";

export default class DataBiding extends Component {
  prod = {
    id: 1,
    name: "iPhone",
  };

  renderTitle = () => {
    let res = "XYZ";
    return (
      <div>
        {res} - {this.prod.name}
      </div>
    ); //Cos thể retunrn về string, number, null, boolean, jsx (Kg thể binding object)
  };

  render() {
    let title = "CyberSoft";
    let person = {
      id: 1,
      name: "Ang",
      img: "https://i.pravatar.cc?u=1",
      age: 18,
    };

    return (
      <div className="container">
        <h3>DataBinding</h3>
        <h3>Product Name: {this.prod.name}</h3>
        <p>{this.renderTitle()}</p>
        <p id="txt">{title}</p>
        <div className="card w-50">
          <img className="card-img-top" src={person.img} alt="Title" />
          <div className="card-body">
            <h4 className="card-title">Name: {person.name}</h4>
            <p className="card-text">Age: {person.age}</p>
            <button className="btn btn-success">Block friend</button>
          </div>
        </div>
      </div>
    );
  }
}
