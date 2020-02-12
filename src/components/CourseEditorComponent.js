import React, { Component } from "react";
import ModuleList from "./ModuleListComponent";
import TopicPills from "./TopicListComponent";
import WidgetList from "./WidgetListComponent";
import LessonTab from "./LessonsTabComponent";
import { combineReducers, createStore } from "redux";
import { Provider, connect } from "react-redux";
import moduleReducer from "../reducers/moduleReducer";
import lessonReducer from "../reducers/lessonReducer";
import topicReducer from "../reducers/topicReducer";
import 'font-awesome/css/font-awesome.min.css';

const rootReducer = combineReducers({
  modules: moduleReducer,
  lessons: lessonReducer,
  topics: topicReducer
});

// const moduleFsm = (state = this.initialState, action) => {
//   return state;
// };

const store = createStore(rootReducer);

class CourseEditor extends React.Component {
  state = {
    moduleId: ""
  };

  render() {
    return (
      <Provider store={store}>
        <title>Course Editor</title>
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link href="../css/styles.css" rel="stylesheet" />
        <link href="course-editor.style.client.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <body class="wbdv-stretch">
          <div class="container-fluid main wbdv-row wbdv-stretch">
            <div class="row wbdv-row">
              <button
                class="btn mb-3 wbdv-row wbdv-button wbdv-delete"
                onClick={() => this.props.history.push("/")}
              >
                x
              </button>
              <div class="col">
                <h2 class="wbdv-course-title">CS4550-WebDev</h2>
                <h2 class="wbdv-course-title">{this.props.courseId}</h2>
              </div>
              <div class="col-sm-8">
                <LessonTab moduleId={this.props.moduleId} courseId={this.props.courseId}/>
              </div>
            </div>
            <div>
              <div class="row">
                <div class="col-sm">
                  <ModuleList courseId={this.props.courseId} />
                </div>
                <div class="col-sm-8 wbdv-rightside">
                  <TopicPills lessonId={this.props.lessonId} moduleId={this.props.moduleId} courseId={this.props.courseId}/>
                  <div class="container-fluid">
                    <WidgetList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </Provider>
    );
  }
}

export default CourseEditor;
