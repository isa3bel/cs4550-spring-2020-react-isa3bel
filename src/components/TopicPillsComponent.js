import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

class TopicPillsComponent extends React.Component {
  state = {
    editing: false,
    topicName: "",
    selected: false
  };

  componentDidMount() {
    console.log(this.props.topicId + " topic id")
  }

  updateNameForm = newState => {
    this.setState(newState);
  };

  isEditing() {
    this.setState({ editing: !this.state.editing });
  }

  clickedSave = (topicId, topicName) => {
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
            <Link
              to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topics/${this.props.topicId}`}
            >
              {this.props.title}
            </Link>
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
            <button onClick={() => this.isEditing()}>
              <i className="fa fa-pencil" />
            </button>
          )}
          {!this.state.editing && (
            <button onClick={() => this.props.deleteTopic(this.props.topicId)}>
              <i className="fa fa-trash" />
            </button>
          )}
          {this.state.editing && (
            <button
              onClick={() => {
                this.props.updateTopic(this.props.topicId, {
                  title: this.state.topicName,
                  id: this.props.topicId
                });
                this.clickedSave();
              }}
            >
              <i className="fa fa-check" />
            </button>
          )}
        </li>
      </div>
    );
  }
}

export default TopicPillsComponent;
