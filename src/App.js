import React from "react";
import "./App.css";

// Reusable Components
import Section from "./components/Section";
import Modal from "./components/Modal";

const section = [
  { title: "Story", showButton: true },
  { title: "Not Started", showButton: false },
  { title: "In Progress", showButton: false },
  { title: "Done", showButton: false }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      tasks: []
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleTask = this.handleTask.bind(this);
  }

  handleTask = data => {
    this.state.tasks.push(data)
    this.setState({
      openModal: false,
      task: this.state.tasks
    });
  };

  handleOpen(e) {
    e.stopPropagation();
    this.setState({
      openModal: true
    });
  }

  handleClose(e) {
    e.stopPropagation();
    this.setState({
      openModal: false
    });
  }

  render() {
    // console.log(this.state.tasks)
    return (
      <div className="sections">
        {this.state.openModal && (
          <Modal close={this.handleClose} addTask={this.handleTask} />
        )}
        {section.map((item, index) => (
          <Section key={index} {...item} open={this.handleOpen} task={this.state.tasks}/>
        ))}
      </div>
    );
  }
}

export default App;
