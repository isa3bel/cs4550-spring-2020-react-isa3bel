import React, { Component } from "react";
import TopicPillsComponent from "./TopicPillsComponent";
import { connect } from "react-redux";
import topicService from "../services/TopicService";

class TopicPills extends React.Component {
  state = {
    topicName: ""
  };

  componentDidMount() {
    this.props.findTopicsForLesson(this.props.lessonId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.lessonId != this.props.lessonId) {
      this.props.findTopicsForLesson(this.props.topicId);
    }
  }

  addTopic() {
    this.props.createTopic(this.props.lessonId, {title:this.state.topicName});
  }

  updateNameForm = newState => {
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <ul class="nav nav-pills wbdv-topic-pill-list nav-fill">
          {this.props.topics &&
            this.props.topics.map(topic => (
              <TopicPillsComponent
                title={topic.title}
                key={topic.title}
                topicId={topic._id}
                deleteTopic={this.props.deleteTopic}
                updateTopic={this.props.updateTopic}
                moduleId={this.props.moduleId}
                courseId={this.props.courseId}
                lessonId={this.props.lessonId}
              />
            ))}
          {window.location.href.indexOf("lessons") > -1 && (
            <input
              onChange={e =>
                this.updateNameForm({
                  topicName: e.target.value
                })
              }
            ></input>
          )}
          {window.location.href.indexOf("lessons") > -1 && (
            <button
              type="button"
              onClick={() => this.addTopic()}
              class="btn btn-standard wbdv-topic-add-btn"
            >
              +
            </button>
          )}
        </ul>
      </div>
    );
  }
}

const stateToPropertyMapper = state => {
  return {
    topics: state.topics.topics
  };
};

const dispatchToPropertyMapper = dispatch => {
  return {
    findTopicsForLesson: lessonId =>
      topicService.findTopicsForLesson(lessonId).then(actualTopics => {
        return dispatch({
          type: "FIND_TOPICS_FOR_LESSON",
          topics: actualTopics
        });
      }),
    deleteTopic: topicId => {
      return topicService
        .deleteTopic(topicId)
        .then(status => dispatch({ type: "DELETE_TOPIC", topicId: topicId }));
    },
    updateTopic: (topicId, topic) => {
      return topicService
        .updateTopic(topicId, topic)
        .then(status => dispatch({ type: "UPDATE_TOPIC", topic: topic }));
    },
    createTopic: (lessonId, topic) => {
      return topicService
        .createTopic(lessonId, topic)
        .then(status => dispatch({ type: "CREATE_TOPIC", newTopic: topic }));
    }
  };
};

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(TopicPills);
