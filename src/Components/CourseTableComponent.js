import React from 'react'
import CourseRowComponent from "./CourseRowComponent";
import GridComponent from "./GridComponent";

class CourseTableComponent extends React.Component {


  render() {

    if(true) {
      return(
        <div>
                {
                  this.props.courses.map(course =>
                      <CourseRowComponent
                          deleteCourse={this.props.deleteCourse}
                          key={course._id}
                          course={course}
                          editCourse={this.props.editCourse}/>
                  )
                }
        </div>
      )} else  {
        return(
          <div>
                  {
                    this.props.courses.map(course =>
                        <GridComponent
                            deleteCourse={this.props.deleteCourse}
                            key={course._id}
                            course={course}
                            editCourse={this.props.editCourse}/>
                    )
                  }
          </div>
        )
      }
    }
   
}

export default CourseTableComponent