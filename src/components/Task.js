import React, { Component } from "react";

class Task extends Component {
  // constructor(props) {
  //   super(props)
  //   this.drag = this.drag.bind(this)
  //   this.allowDrop = this.allowDrop.bind(this)
  //   this.Drop = this.Drop.bind(this)
  // }
  // drag(ev) {
  //   ev.dataTransfer.setData("text", ev.target.id);
  //   console.log(ev.target.id)
  // }
  // allowDrop(ev) {
  //   ev.preventDefault();
  // }
  // Drop(ev) {
  //   let data = ev.dataTransfer.getData("text");
  //   console.log(data);
  // }
  render() {
    return (
      <div>
        {this.props.task && (
          <p draggable={"true"} onDragStart={this.props.drag} id={this.props.id}>
            <i className="fas fa-square"></i> {this.props.task}
          </p>
        )}
      </div>
    );
  }
}

export default Task;
