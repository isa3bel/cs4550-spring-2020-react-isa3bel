import React, {Component} from 'react';
import TopicPillsComponent from './TopicPillsComponent';

class TopicPills extends React.Component {

  render() {

    return(
      <div>
        <ul
          class="nav nav-pills wbdv-topic-pill-list nav-fill">
          <li class="nav-item wbdv-topic-pill"><TopicPillsComponent></TopicPillsComponent></li>
          <li class="nav-item wbdv-topic-pill"><TopicPillsComponent></TopicPillsComponent></li>
          <li class="nav-item wbdv-topic-pill"><TopicPillsComponent></TopicPillsComponent></li>
          <li class="nav-item wbdv-topic-pill"><TopicPillsComponent></TopicPillsComponent></li>
          <button type="button"
              class="btn btn-standard wbdv-topic-add-btn">+</button>
        </ul>
      </div>
  );


  }
  
}

export default TopicPills;