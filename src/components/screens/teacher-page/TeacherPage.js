/* jshint esversion: 6 */
import React, { Component } from "react";
import { connect } from "react-redux";
import Compute from "../../utils/Compute";
import { withRouter } from "react-router-dom";
import * as _actions from "../../redux/actions/actions";

import "./zstyles.scss";
class TeacherPage extends Component {
  state = {
    fromTemp: "Celsius",
    toTemp: "Celsius",
    inputValue: 0,   
    addExamMsg: "",
  };

  handleFromTempChange = event => {
    this.setState({ fromTemp: event.target.value });
  };

  handleToTempChange = event => {
    this.setState({ toTemp: event.target.value });
  };

  handleInputValueChange = event => {
    this.setState({ inputValue: event.target.value });
  };
  
  handleSubmitAddExamEntry = event => {
    event.preventDefault();

    const toTemp = this.state.toTemp;
    const fromTemp = this.state.fromTemp;

    if (toTemp === fromTemp) {    
      this.setState({addExamMsg: "Cannot convert similar temp unit."});
      return;
    } else {    
      this.setState({addExamMsg: "Exam Entry successfully added."});
    }

    const correctAnswer = Compute.convertTemp(fromTemp, toTemp, this.state.inputValue); 

    this.props.addExamEntry({
      from: this.state.fromTemp, 
      to: this.state.toTemp, 
      input: this.state.inputValue, 
      correctAnswer,
      studentAnswer: 0,      
    });   
   
  };

  render() {
    return (
      <div className="container">
        <h2 style={{ textAlign: "left" }}>Teacher Page</h2>
        <div className="main-panel">
          <div className="entry-form">
            <h3>Entry Form</h3>
            <form onSubmit={this.handleSubmitAddExamEntry}>
              <div className="field">
                <label>From</label>
                <div>
                  <select
                    value={this.state.fromTemp}
                    onChange={this.handleFromTempChange}
                  >
                    <option>Celsius</option>
                    <option>Farenheit</option>
                    <option>Kelvin</option>
                    <option>Rankine</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label>To </label>
                <div>
                  <select
                    value={this.state.toTemp}
                    onChange={this.handleToTempChange}
                  >
                    <option>Celsius</option>
                    <option>Farenheit</option>
                    <option>Kelvin</option>
                    <option>Rankine</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label>Input Value</label>
                <div>
                <input name="input-value" type="text" value={this.state.inputValue} onChange={this.handleInputValueChange} />
                </div>
              </div>

              <div>
                <input type="submit" value="Add to Exam" />
                
                <div className="success-msg">{this.state.addExamMsg}</div>
                
                
              </div>
            </form>
          </div>
          <div className="data-grid">
            <h3>Exam Entries</h3>
            <table className="table1" cellSpacing="0" cellPadding="0">
              <thead>
                <tr>
                  <td>No</td>
                  <td>Convert From</td>
                  <td>Convert To</td>
                  <td>Teacher Entry</td>
                  <td>Correct Answer</td>
                </tr>
              </thead>
              <tbody>
             
                  {                                 
                    this.props.examEntries.map((exam, index )=> {                       
                      return (<tr key={index}>
                              <td>{index+1}</td>
                              <td>{exam.from}</td>
                              <td>{exam.to}</td>
                              <td>{exam.input}</td>
                              <td>{exam.correctAnswer}</td>
                             </tr>) 
                    })                    
                  }            
                 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

// ---------- Setup Redux -------------
const mapStateToProps = store => ({
  data: store.data,
  examEntries: store.examEntries,
});

const mapDispatchToProps = {
  addExamEntry: _actions.addExamEntry,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TeacherPage)
);