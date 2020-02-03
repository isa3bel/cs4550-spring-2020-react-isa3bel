import React from 'react'
import CourseRowComponent from "./CourseRowComponent";
import CourseCard from "./CourseCardComponent";
import CourseEditor from "./CourseEditorComponent";

class CourseTableComponent extends React.Component {

  render() {
    if(this.props.button) {
      return(
        <div>
                {
                  this.props.courses.map(course =>{
                      return (
                        <CourseRowComponent
                          deleteCourse={this.props.deleteCourse}
                          key={course._id}
                          id={course._id}
                          course={course}
                          editCourse={this.props.editCourse}
                          showCourseEditor={this.props.showCourseEditor}
                          updateCourse={this.props.updateCourse}/>
                      )
                    })
                }
        </div>
      )} else  {
        console.log(this.props.courses);
        return(
          <div className="row justify-content-around">
                  {
                    this.props.courses.map(course =>
                        <CourseCard
                          deleteCourse={this.props.deleteCourse}
                          key={course._id}
                          id={course._id}
                          course={course}
                          editCourse={this.props.editCourse}
                          isEditing={this.props.isEditing}
                          updateCourse={this.props.updateCourse}
                          />
                    )
                  }
          </div>
        )
      }
    }
   
}

export default CourseTableComponent