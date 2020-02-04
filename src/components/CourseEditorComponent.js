import React, {Component} from 'react'
import ModuleList from "./ModuleListComponent";
import TopicPills from './TopicPillsComponent';
import WidgetList from './WidgetListComponent';
import LessonTab from './LessonsTabComponent';

class CourseEditor extends React.Component {


  render() {
    return(
      <div>
      <title>Course Editor</title>
      <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          rel="stylesheet" />
      <link href="../css/styles.css" rel="stylesheet" />
      <link href="course-editor.style.client.css" rel="stylesheet" />
      <link rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      
      <body class="wbdv-stretch">
          <div class="container-fluid main wbdv-row wbdv-stretch">
              <div class="row wbdv-row">
                  <a href="../home-page/home-page.template.client.html"
                      class="btn mb-3 wbdv-row wbdv-button wbdv-delete">x</a>
                  <div class="col">
                      <h2 class="wbdv-course-title">CS4550-WebDev</h2>
                  </div>
                  <div class="col-sm-8">
                      <LessonTab/>
                  </div>
              </div>
              <div>
                  <div class="row">
                      <div class="col-sm">
                        <ModuleList/>
                      </div>
                      <div class="col-sm-8 wbdv-rightside">
                          <TopicPills/>
      
                          <div class="container-fluid">
                              <WidgetList/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </body>
      </div>
    );
  }



}

export default CourseEditor;