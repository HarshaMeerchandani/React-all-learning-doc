import React, { Component } from "react";

class Salary extends Component {
  constructor() {
    super();
    this.state = {
      bs: 0,
      gs: 0
    };
  }

  setBasiasalary = event => {
    this.setState({
      bs: event.target.value
    });
  };

  CalculateSalary = () => {
    const dr = (this.state.bs * 7) / 100;
    const hv = (this.state.bs * 6) / 100;
    const tra = (this.state.bs * 5) / 100;
    const grosssalry =
      parseInt(this.state.bs) + parseInt(dr) + parseInt(hv) - parseInt(tra);

    this.setState({
      gs: grosssalry
    });
  };

  render() {
    return (
      <div>
        <h1>Gross salary</h1>
        <input
          type="text"
          id="btnid"
          onChange={this.setBasiasalary}
          value={this.state.bs}
        />
        {this.state.bs}
        <br></br>
        <button onClick={this.CalculateSalary}>Calculate salary</button>
        <p>
          Goss Salary:
          {this.state.da}
          {this.state.gs}
        </p>
      </div>
    );
  }
}

export default Salary;
