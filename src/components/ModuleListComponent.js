import React, { Component } from "react";
import ModuleListItem from "./ModuleListItemComponent";
import { connect } from "react-redux";
import moduleService from "../services/ModuleService";

class ModuleList extends React.Component {
  componentDidMount() {
    this.props.findModuleForCourse(this.props.courseId);
  }

  updateNameForm = newState => {
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <ul class="list-group wbdv-module-list">
          {this.props.modules &&
            this.props.modules.map(module => (
              <ModuleListItem title={module.title} />
            ))}
        </ul>
      </div>
    );
  }
}

const stateToPropertyMapper = state => {
  return {
    modules: state.modules.modules
  };
};

const dispatchToPropertyMapper = dispatch => {
  return {
    findModuleForCourse: courseId =>
      moduleService.findModuleForCourse(courseId).then(actualModules => {
        return dispatch({
          type: "FIND_MODULES_FOR_COURSE",
          modules: actualModules
        });
      }),
    findAllModules: () =>
      // TODO: move all server access to ModuleService.js
      fetch("https://wbdv-generic-server.herokuapp.com/api/jannunzi/modules")
        .then(response => response.json())
        .then(actualModules =>
          dispatch({
            type: "FIND_ALL_MODULES",
            modules: actualModules
          })
        )
  };
};

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(ModuleList);
