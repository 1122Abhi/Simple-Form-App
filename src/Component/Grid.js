import React, { Component } from "react";
// import Table from "./Table";
// import ReactBootStrap from "react-bootstrap";
// import "./App.css";

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      city: "",
      password: "",
      rowData: [
        {
          name: "harry",
          age: "12",
          city: "NY",
          password: "harry",
        },
        {
          name: "ron",
          age: "45",
          city: "uk",
          password: "rk",
        },
        {
          name: "jeff",
          age: "76",
          city: "aus",
          password: "mdj",
        },
      ],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      age: this.state.age,
      city: this.state.city,
      password: this.state.password,
    };
    this.setState({
      rowData: [...this.state.rowData, obj],
    });
    console.log("in handle", this.state.name1);
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleDelete = (data) => {
    const rowArray = this.state.rowData.filter((i) => i.name !== data);
    console.log(">>", rowArray);
    this.setState({ rowData: rowArray });
  };

  render() {
    console.log("in render", this.state.rowData);
    return (
      <div className="container">
        <div class="row">
          <div className="col-sm-4">
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label class="control-label col-sm-2" for="Name">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="Age">
                  Age:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="age"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="City">
                  City:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2">Password:</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <button type="Submit">Submit</button>
              </div>
            </form>
          </div>
          <div>
            <div className="col-sm-8">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">City</th>
                    <th scope="col">Delete column</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.rowData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.age}</td>
                      <td>{data.city}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={this.handleDelete.bind(this, data.name)}
                        >
                          Delete
                          <span class="glyphicon glyphicon-trash"></span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;
