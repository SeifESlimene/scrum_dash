import React, { Component } from "react";
import "../App.css";

// Reusable Component
import Task from "./Task";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clone: ""
    };
    this.Drop = this.Drop.bind(this);
  }
  handleDrag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  allowDrop(ev) {
    ev.preventDefault();
    console.log(ev.target)
    if (ev.target.getAttribute("draggable") === "true") {
      ev.dataTransfer.dropEffect = "none";
    } else {
      ev.dataTransfer.dropEffect = "all";
    }
  }
  Drop(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    let data = ev.dataTransfer.getData("text");
    this.setState({
      clone: data
    });
    ev.target.appendChild(document.getElementById(data));
  }
  render() {
    return (
      <section>
        <header>
          <h5>{this.props.title}</h5>
          {this.props.showButton && (
            <button onClick={this.props.open}>
              <i className="fas fa-plus"></i>
            </button>
          )}
        </header>
        {this.props.title === "Story" ? (
          <main onDragOver={this.allowDrop} onDrop={this.Drop}>
            {this.props.task.map((item, index) => (
              <Task
                key={index}
                id={`Drag${index}`}
                task={item}
                drag={this.handleDrag}
              />
            ))}
          </main>
        ) : (
          <main onDragOver={this.allowDrop} onDrop={this.Drop}></main>
        )}
      </section>
    );
  }
}

export default Section;
