import React, {Component} from 'react'

class LessonTab extends React.Component {

  render() {
    return(
      <div>
        <ul class="nav nav-tabs nav-fill wbdv-text-color">
          <li class="nav-item"><a
              class="nav-link wbdv-page-tab" href="#">
                  Build </a></li>
          <li class="nav-item"><a
              class="nav-link active wbdv-page-tab" href="#">
                  Pages </a></li>
          <li class="nav-item"><a
              class="nav-link wbdv-page-tab" href="#">
                  Theme </a></li>
          <li class="nav-item"><a
              class="nav-link wbdv-page-tab" href="#">
                  Store </a></li>
          <li class="nav-item"><a
              class="nav-link wbdv-page-tab" href="#">
                  Apps </a></li>
          <li class="nav-item"><a
              class="nav-link wbdv-page-tab" href="#">
                  Settings </a></li>
          <button type="button"
              class="btn btn-standard wbdv-new-page-btn">+</button>
          </ul>
    </div>
    )


  }
}

export default LessonTab;