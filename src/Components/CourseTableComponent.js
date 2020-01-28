import React from "react";

const CourseTableComponent = ({courses, deleteCourse}) => 
  <div>
    <h2>CourseTableComponent {courses.length}</h2>
    <ul>
      {
        courses.map( function(course, index) {
          return (
            <li key={index}>{
              course.title} 
              <button onClick={() => deleteCourse(course)}>Delete</button>
            </li>
            );
        }) // map func iterates over an array and calls a function
      }
    </ul>
  </div>

export default CourseTableComponent;