import React, { Component } from "react";
import ModuleList from "./ModuleListComponent";
import TopicPillsComponent from "./TopicListComponent";
import WidgetList from "./WidgetListComponent";
import LessonTab from "./LessonsTabComponent";
import { combineReducers, createStore } from "redux";
import { Provider, connect } from "react-redux";
import moduleReducer from "../reducers/moduleReducer";
import moduleService, { findModuleForCourse } from "../services/ModuleService";

const rootReducer = combineReducers({
  modules: moduleReducer
});

// const moduleFsm = (state = this.initialState, action) => {
//   return state;
// };

const store = createStore(rootReducer);

class CourseEditor extends React.Component {
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
                <h2 class="wbdv-course-title">
                  {this.props.courseId}
                </h2>
              </div>
              <div class="col-sm-8">
                <LessonTab />
              </div>
            </div>
            <div>
              <div class="row">
                <div class="col-sm">
                  <ModuleList courseId={this.props.courseId} />
                </div>
                <div class="col-sm-8 wbdv-rightside">
                  <TopicPillsComponent />

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
