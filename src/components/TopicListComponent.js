import React, { Component } from "react";
import TopicPillsComponent from "./TopicPillsComponent";
import { connect } from "react-redux";
import topicService from "../services/TopicService";
import {updateTopic, findTopicsForLesson, deleteTopic, createTopic} from "../actions/topicActions"

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
                topicId={topic.id}
                deleteTopic={this.props.deleteTopic}
                updateTopic={this.props.updateTopic}
                moduleId={this.props.moduleId}
                courseId={this.props.courseId}
                lessonId={this.props.lessonId}
              />
            ))}
          {window.location.href.indexOf("lesson") > -1 && (
            <input
              onChange={e =>
                this.updateNameForm({
                  topicName: e.target.value
                })
              }
            ></input>
          )}
          {window.location.href.indexOf("lesson") > -1 && (
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
        return dispatch(findTopicsForLesson(actualTopics));
      }),
    deleteTopic: topicId => {
      return topicService
        .deleteTopic(topicId)
        .then(status => dispatch(deleteTopic(topicId)));
    },
    // findTopic: topicId => {
    //   return topicService.findTopic(topicId).then(staatus => dispatch())
    // }
    updateTopic: (topicId, topic) => {
      return topicService
        .updateTopic(topicId, topic)
        .then(status => dispatch(updateTopic(topic)));
    },
    createTopic: (lessonId, topic) => {
      return topicService
        .createTopic(lessonId, topic)
        .then(status => dispatch(createTopic(topic)));
    }
  };
};

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(TopicPills);
