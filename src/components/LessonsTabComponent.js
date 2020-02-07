import React, {Component} from 'react'
import LessonsComponent from './LessonsComponent';

class LessonTab extends React.Component {

  render() {
    return(
      <div>
        <ul class="nav nav-tabs nav-fill wbdv-text-color">
        <LessonsComponent></LessonsComponent>
        <LessonsComponent></LessonsComponent>
        <LessonsComponent></LessonsComponent>
        <LessonsComponent></LessonsComponent>
        <LessonsComponent></LessonsComponent>
        <LessonsComponent></LessonsComponent>
          <button type="button"
              class="btn btn-standard wbdv-new-page-btn">+</button>
          </ul>
    </div>
    )


  }
}

export default LessonTab;