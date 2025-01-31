import React from "react";
import CourseHeadingComponent from "../components/CourseHeadingComponent";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseService from "../services/CourseService";
import CourseEditor from "../components/CourseEditorComponent";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CourseManagerContainer extends React.Component {
  constructor() {
    super();
    this.courseService = new CourseService();
    this.state = {
      courses: [],
      button: true,
      isEditing: false,
      showCourseEditor: false
    };
  }

  showCourseEditor = () => {
    this.setState({
      showCourseEditor: true
    });
  };

  componentDidMount = () => {
    this.courseService.findAllCourses().then(courses =>
      this.setState({
        courses: courses
      })
    );
  };

  deleteCourse = deletedToCourse => {
    this.courseService.deleteCourse(deletedToCourse._id).then(() =>
      this.setState({
        courses: this.state.courses.filter(
          course => course._id !== deletedToCourse._id
        )
      })
    );
  };

  addCourse = newName => {
    this.courseService
      .createCourse({
        title: newName
      })
      .then(actualCourse =>
        this.setState({
          courses: [...this.state.courses, actualCourse]
        })
      );
      
  };

  editCourse = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  filterSortButton = () => {
    this.setState({ button: !this.state.button });
  };

  updateCourse = (courseId, updatedName) => {
    this.courseService
      .updateCourse(courseId, {
        title: updatedName
      })
      .then(() => {
        return this.courseService.findAllCourses();
      })
      .then(courses => {
        this.setState({
          courses: courses
        });
      });
  };

  render() {
    return (
      <div>
        <Router>
          <Route
            path="/course-editor/:courseId"
            render={props => (
              <CourseEditor {...props} courseId={props.match.params.courseId} />
            )}
            exact={true}
          ></Route>
          <Route
            path="/course-editor/:courseId/module/:moduleId"
            exact={true}
            render={props => (
              <CourseEditor
                {...props}
                courseId={props.match.params.courseId}
                moduleId={props.match.params.moduleId}
              />
            )}
          />
          <Route
            path="/course-editor/:courseId/module/:moduleId/lessons/:lessonId"
            exact={true}
            render={props => (
              <CourseEditor
                {...props}
                courseId={props.match.params.courseId}
                lessonId={props.match.params.lessonId}
                moduleId={props.match.params.moduleId}
              />
            )}
          />
          <Route
            path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId/topics/:topicId"
            exact={true}
            render={props => (
              <CourseEditor
                {...props}
                courseId={props.match.params.courseId}
                lessonId={props.match.params.lessonId}
                moduleId={props.match.params.moduleId}
                topicId={props.match.params.topicId}
              />
            )}
          />
          <Route
            exact={true}
            path="/"
            render={() => (
              <div>
                <CourseHeadingComponent
                  addCourse={this.addCourse}
                  filtered={this.state.button}
                  filterSortButton={this.filterSortButton}
                />
                <CourseTableComponent
                  deleteCourse={this.deleteCourse}
                  courses={this.state.courses}
                  editCourse={this.editCourse}
                  button={this.state.button}
                  isEditing={this.state.isEditing}
                  showCourseEditor={this.state.showCourseEditor}
                  updateCourse={this.updateCourse}
                />
              </div>
            )}
          ></Route>
        </Router>
      </div>
    );
  }
}

export default CourseManagerContainer;
