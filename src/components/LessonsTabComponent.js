import React, { Component } from "react";
import LessonsComponent from "./LessonsComponent";
import { connect } from "react-redux";
import lessonService from "../services/LessonService";

class LessonTab extends React.Component {
  state = {
    lessonName: ""
  };
  componentDidMount() {
    this.props.findLessonsForModule(this.props.moduleId);
  }

  updateNameForm = newState => {
    this.setState(newState);
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.lessonId !== prevProps.lessonId) {
      this.props.findLessonsForModule(this.props.moduleId);
    }
  }

  addLesson() {
    this.props.addLesson(this.props.moduleId, this.state.lessonName);
  }

  render() {
    return (
      <div>
        <ul class="nav nav-tabs nav-fill wbdv-text-color">
          {this.props.lessons &&
            this.props.lessons.map(lesson => {
              console.log("lesson object " + JSON.stringify(lesson));
              console.log("lesson object title" + lesson.title);
              return (
                <LessonsComponent
                  title={lesson.title}
                  lessonId={lesson._id}
                  moduleId={this.props.moduleId}
                  courseId={this.props.courseId}
                  deleteLesson={this.props.deleteLesson}
                  updateLesson={this.props.updateLesson}
                ></LessonsComponent>
              );
            })}

          {window.location.href.indexOf("module") > -1 && (
            <input
              onChange={e =>
                this.updateNameForm({
                  lessonName: e.target.value
                })
              }
            ></input>
          )}
          {window.location.href.indexOf("module") > -1 && (
            <button
              onClick={() => this.addLesson(this.props.moduleId, this.state.lessonName)}
              type="button"
              class="btn btn-standard wbdv-new-page-btn"
            >
              +
            </button>
          )}
        </ul>
      </div>
    );
  }
}

const stateToPropertyMapper = state => ({
  lessons: state.lessons.lessons
});

const dispatcherToPropertyMapper = dispatcher => ({
  findLessonsForModule: moduleId =>
    lessonService.findLessonsForModule(moduleId).then(lessons =>
      dispatcher({
        type: "FIND_LESSONS_FOR_MODULE",
        lessons: lessons
      })
    ),
  updateLesson: (lessonId, lesson) => {
    return lessonService.
        updateLesson(lessonId, lesson)
        .then(status =>
          dispatcher({ type: "UPDATE_LESSON", lesson: lesson })
        );
    },
  addLesson: (moduleId, lesson) =>
    lessonService.createLesson(moduleId,lesson).then(actualLesson =>
      dispatcher({
        type: "CREATE_LESSON",
        lesson: actualLesson
      })
    ),
  deleteLesson: lessonId =>
    lessonService.deleteLesson(lessonId).then(status =>
      dispatcher({
        type: "DELETE_LESSON",
        lessonId: lessonId
      })
    ),
  findAllLessons: () =>
    lessonService.findAllLessonsForModule.then(lessons =>
      dispatcher({
        type: "FIND_ALL_LESSONS",
        lessons: lessons
      })
    )
});

export default connect(
  stateToPropertyMapper,
  dispatcherToPropertyMapper
)(LessonTab);
