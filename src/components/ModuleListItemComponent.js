import React, { Col } from "react";
import { deleteModule } from "../services/ModuleService";

class ModuleListItem extends React.Component {
  // state = {
  //   editing: false,
  //   moduleName: "",
  //   selected: false
  // };

  // selected = () => {
  //   this.setState({ selected: !this.state.selected });
  // };

  // updateNameForm = newState => {
  //   this.setState(newState);
  // };

  // isEditing() {
  //   this.setState({ editing: !this.state.editing });
  // }

  // clickedSave = moduleName => {
  //   //this.props.updateCourse(this.props.id, moduleName);
  //   this.setState({ editing: !this.state.editing });
  // };

  render() {
    return (
      <div>
      <li class="list-group-item wbdv-module-item wbdv-selected wbdv-module-item-title d-flex justify-content-between">
        <span>{this.props.title}</span>
      </li></div>
    );
  }
}

export default ModuleListItem;
