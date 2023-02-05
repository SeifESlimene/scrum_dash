import React, { Component } from "react";
import "../App.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.stopPropagation();
    this.setState({
      input: e.target.value
    });
  }

  render() {
    return (
      <div className="modal">
        <div className="box">
          <header>
            <h3>Add New Task</h3>
          </header>
          <main>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.input}
              autoFocus
            ></input>
          </main>
          <footer>
            <button onClick={this.props.close}>Cancel</button>
            <button onClick={() => this.props.addTask(this.state.input)}>
              Confirm
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default Modal;
