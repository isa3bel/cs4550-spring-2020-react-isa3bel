import React from 'react'
import CourseHeadingComponent from"../components/CourseHeadingComponent";
import CourseTableComponent from"../components/CourseTableComponent";
import CourseService from "../services/CourseService";
import CourseEditor from '../components/CourseEditorComponent';

class CourseManagerContainer extends React.Component {
    
    constructor() {
      super();
      this.courseService = new CourseService();
      this.state = {
        courses: [],
        button: true,
        isEditing: false,
        showCourseEditor: false,
      }
    }

    showCourseEditor = () => {
        this.setState({
            showCourseEditor: true,
        })
    }

    componentDidMount = () => {
        this.courseService.findAllCourses()
        .then(courses => this.setState({
            courses: courses
        }))
    }

    deleteCourse = (deletedToCourse) => {
        
        console.log(deletedToCourse);
        this.courseService.deleteCourse(deletedToCourse._id).then( () => this.setState({
                courses: this.state.courses.filter(course => course._id !== deletedToCourse._id)
        }));
    }

    addCourse = (newName) => {
        this.courseService.createCourse({
            title: newName,
        }).then(actualCourse => this.setState({
            courses: [
                ...this.state.courses,
                actualCourse,
            ]
        }))

    }

    editCourse = () => {
      this.setState({
          isEditing: !this.state.isEditing
      });
    }

    filterSortButton = () => {
        this.setState({button: !this.state.button});
        
    }

    updateCourse = (courseId, updatedName) => {
        this.courseService.updateCourse(courseId, {
            title: updatedName,
        })
        .then(()=> {
            return this.courseService.findAllCourses()
        })
        .then(courses => {
            console.log("updated courses: "+courses)
            this.setState({
            courses: courses
        })}
        )
       
    }

    render() {

        if(this.state.showCourseEditor) {
            return(<CourseEditor/>);
        }  else{
            return (
                <div>
                    <CourseHeadingComponent addCourse={this.addCourse} filtered={this.state.button} filterSortButton={this.filterSortButton}/>
                    <CourseTableComponent
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}
                        editCourse={this.editCourse}
                        button={this.state.button}
                        isEditing={this.state.isEditing}
                        showCourseEditor={this.showCourseEditor}
                        updateCourse={this.updateCourse}/>
                </div>
            );
        }
        
    }
}

export default CourseManagerContainer