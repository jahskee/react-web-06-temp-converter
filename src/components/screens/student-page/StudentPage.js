/* jshint esversion: 6 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as _actions from "../../redux/actions/actions";

import "./zstyles.scss";
class StudentPage extends Component {
  state = {
    submitted: false
  };

  handleChangeStudentAnswer = (rowIndex, event) => {
    this.props.updateExamAnswer(rowIndex, event.target.value);
  };

  handleSubmit = event => {
    this.setState({ submitted: true });
    this.props.updateExamResults(this.props.examEntries);
    event.preventDefault();
  };

  handleRetakeTest = event => {
    this.setState({ submitted: false });

    event.preventDefault();
  };

  render() {
    return (
      <div id="container">
        <h2>Student Page</h2>
        <div className="student-main-panel">
          <div className="data-grid">
            <h3>Test Page</h3>
            <form onSubmit={this.handleSubmit}>
              <table className="table1" cellSpacing="0" cellPadding="0">
                <thead>
                  <tr>
                    <td>No</td>
                    <td>Input Temperature</td>
                    <td>Target Units</td>
                    <td>Input Value</td>
                    <td>Student Response</td>
                    <td>Result</td>
                  </tr>
                </thead>
                <tbody>
                  {this.props.examEntries.map((exam, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{exam.from}</td>
                        <td>{exam.to}</td>
                        <td>{exam.input}</td>
                        <td>
                          <input
                            type="text"
                            placeholder="Enter Your Answer"
                            value={this.props.examEntries[index].studentAnswer}
                            onChange={this.handleChangeStudentAnswer.bind(
                              this,
                              index
                            )}
                          />
                        </td>
                        <td>{exam.result}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <input type="submit" value="Submit Answers" />
              {this.state.submitted && <div>Submitted!</div>}

              <div />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// ---------- Setup Redux -------------
const mapStateToProps = store => ({
  data: store.data,
  examEntries: store.examEntries
});

const mapDispatchToProps = {
  addExamEntry: _actions.addExamEntry,
  updateExamAnswer: _actions.updateExamAnswer,
  updateExamResults: _actions.updateExamResults
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StudentPage)
);
