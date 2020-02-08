import React, { Component } from "react";

class TopicPillsComponent extends React.Component {
  state = {
    editing: false,
    topicName: "",
    selected: false
  };

  updateNameForm = newState => {
    this.setState(newState);
  };

  isEditing() {
    this.setState({ editing: !this.state.editing });
  }

  clickedSave = courseName => {
    this.setState({ editing: !this.state.editing });
  };

  selected = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    return (
      <div>
        <li class="nav-item wbdv-topic-pill">
          {!this.state.editing && (
            <a class="nav-link" href="#">
              Topic 1
            </a>
          )}
          {this.state.editing && (
            <input
              onChange={e =>
                this.updateNameForm({
                  topicName: e.target.value
                })
              }
              value={this.state.topicName}
            ></input>
          )}
          {!this.state.editing && (
            <button onClick={() => this.isEditing()}>edit</button>
          )}
          {!this.state.editing && <button>delete</button>}
          {this.state.editing && (
            <button onClick={() => this.clickedSave()}>save</button>
          )}
        </li>
      </div>
    );
  }
}

export default TopicPillsComponent;
