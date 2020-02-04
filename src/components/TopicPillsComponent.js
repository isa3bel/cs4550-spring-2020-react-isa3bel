import React, {Component} from 'react';

class TopicPills extends React.Component {

  render() {

    return(
      <div>
        <ul
          class="nav nav-pills wbdv-topic-pill-list nav-fill">
          <li class="nav-item wbdv-topic-pill"><a
              class="nav-link active" href="#">Topic 1</a></li>
          <li class="nav-item wbdv-topic-pill"><a
              class="nav-link" href="#">Topic 2</a></li>
          <li class="nav-item wbdv-topic-pill"><a
              class="nav-link" href="#">Topic 3</a></li>
          <li class="nav-item wbdv-topic-pill"><a
              class="nav-link" href="#">Topic 4</a></li>
          <button type="button"
              class="btn btn-standard wbdv-topic-add-btn">+</button>
        </ul>
      </div>
  );


  }
  
}

export default TopicPills;