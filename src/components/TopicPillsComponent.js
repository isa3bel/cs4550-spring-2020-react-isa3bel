import React, { Component } from "react";

class TopicPillsComponent extends React.Component {
  render() {
    return (
      <div>
      <li class="nav-item wbdv-topic-pill">
        <a class="nav-link" href="#">
          Topic 1
        </a>
        <button>edit</button>
        <button>delete</button>
        <button>save</button>
      </li></div>
    );
  }
}

export default TopicPillsComponent;
