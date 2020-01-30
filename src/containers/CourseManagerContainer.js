import React from 'react'
import CourseHeadingComponent from "../components/CourseHeadingComponent";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseService from "../services/CourseService";

class CourseManagerContainer extends React.Component {
    state = {
        courses: [
            {_id: '123', title: 'Course A'},
            {_id: '234', title: 'Course B'},
            {_id: '345', title: 'Course C'},
            {_id: '456', title: 'Course D'}
        ]
    }
    
    constructor() {
      super();
      this.courseService = new CourseService();
      // this.state = {
      //   courses2: this.courseService.findAllCourses()
      // }
    }

    deleteCourse = (deletedToCourse) => {
        this.setState(prevState => ({
                courses: prevState.courses.filter(course =>
                    course._id !== deletedToCourse._id
                )
            })
        )

        // this.setState({
        //   courses: this.courseService.deleteCourse(deletedToCourse)
        // })
    }

    addCourse = () => {
        this.setState(prevState => ({
            courses: [...prevState.courses, {
                _id: (new Date()).getTime() + '',
                title: 'New Course'
            }]
        })
        )
        
        this.setState({
          courses: this.courseService.addcourse(null)
        })

    }

    editCourse = () => {
      alert('test')
    }

    render() {
        return (
            <div>
                <CourseHeadingComponent addCourse={this.addCourse}/>
                <CourseTableComponent
                    deleteCourse={this.deleteCourse}
                    courses={this.state.courses}
                    editCourse={this.editCourse}/>
            </div>
        );
    }
}

export default CourseManagerContainer