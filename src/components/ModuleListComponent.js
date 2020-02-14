import React, { Component } from "react";
import ModuleListItem from "./ModuleListItemComponent";
import { connect } from "react-redux";
import moduleService from "../services/ModuleService";

class ModuleList extends React.Component {

  state = {
    moduleName: ""
  }
  componentDidMount() {
    this.props.findModuleForCourse(this.props.courseId);
    
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.moduleId != this.props.moduleId) {
      this.props.findModuleForCourse(this.props.courseId);
    }
  }

  updateNameForm = newState => {
    this.setState(newState);
  };

  addModule() {
    this.props.createModule(this.props.courseId, {title: this.state.moduleName});

  }

  render() {
    return (
      <div>
        <ul class="list-group wbdv-module-list">
          {this.props.modules &&
            this.props.modules.map(module => {
              return <ModuleListItem
                title={module.title}
                moduleId={module._id}
                deleteModule={this.props.deleteModule}
                updateModule={this.props.updateModule}
                courseId={this.props.courseId}
              />
          })}
            <li className="list-group-item wbdv-module-item wbdv-selected wbdv-module-item-title d-flex justify-content-between">
            <input onChange={e =>
              this.updateNameForm({
                moduleName: e.target.value
              })
            }></input>
            <button onClick={() => this.addModule()}>+</button>
            </li>
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
    deleteModule: moduleId => {
      return moduleService
        .deleteModule(moduleId)
        .then(status =>
          dispatch({ type: "DELETE_MODULE", moduleId: moduleId })
        );
    },
    updateModule: (moduleId, module) => {
      return moduleService
        .updateModule(moduleId, module)
        .then(status =>
          dispatch({ type: "UPDATE_MODULE", newModule: module })
        );
    },
    createModule: (courseId, module) => {
      return moduleService
      .createModule(courseId, module)
      .then(status => 
        dispatch({ type: "CREATE_MODULE", newModule: module }));
    },

  };
};

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(ModuleList);
