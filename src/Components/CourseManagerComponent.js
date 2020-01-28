import React from "react";
import GridComponent from './GridComponent';
import CourseTableComponent from './CourseTableComponent';

class CourseManagerComponent extends React.Component {

  state = {
    layout:'grid',
    courses: [
      {_id: '123', title: 'Course a'},
      {_id: '123', title: 'Course b'},
      {_id: '123', title: 'Course c'},
      {_id: '123', title: 'Course d'},
      {_id: '123', title: 'Course e'},
    ] 
  }

  toggle = () => {
    this.setState(prevState => {
      if(prevState.layout === 'table') {
        return ({
          layout: 'grid'
        })
      } else {
        return ({
          layout: 'table'
        })
      } 
    });
  }

  deleteCourse = (course) => {
    this.setState(prevState => {
      return({
        courses: prevState.courses.filter( function(crs) {return crs._id !== course._id} )  
      })
    })
  }

  addCourse = () => {
    this.setState(prevState => {
      return({
        courses: [...prevState.courses, {
          _id: (new Date().getTime()),
          title: 'New Course',
        }]
      })
    })
  }
  
  render() {
    return (<div>

    <CourseManagerComponent></CourseManagerComponent>
    <button onClick={this.toggle}>Toggle</button>
    <button onClick={this.addCourse}>Add Course</button>


    {this.state.layout === 'grid' && <GridComponent courses={this.state.courses}></GridComponent>}
    {this.state.layout === 'table' && <CourseTableComponent courses={this.state.courses} deletCourse={this.deleteCourse}></CourseTableComponent>}
    
  </div>);

  }


}


export default CourseManagerComponent;