import React, { Col } from "react";
import { deleteModule } from "../services/ModuleService";
import moduleService, { findModuleForCourse } from "../services/ModuleService";

class ModuleListItem extends React.Component {
  state = {
    editing: false,
    moduleName: "",
    selected: false
  };

  selected = () => {
    this.setState({ selected: !this.state.selected });
  };

  updateNameForm = newState => {
    this.setState(newState);
  };

  isEditing() {
    this.setState({ editing: !this.state.editing });
  }

  render() {
    return (
      <div>
        <li class="list-group-item wbdv-module-item wbdv-selected wbdv-module-item-title d-flex justify-content-between">
          {!this.state.editing && <span onClick={this.selected}>{this.props.title}</span>}
          {
            this.state.editing && <input onChange={e =>
              this.updateNameForm({
                moduleName: e.target.value
              })
            } value={this.state.moduleName}></input>
          }
          {!this.state.editing && <button onClick={() => this.props.deleteModule(this.props.moduleId)}>Delete</button>}
          {!this.state.editing &&  <button onClick={(event) => this.isEditing()}>edit</button>}
          {this.state.editing &&  <button onClick={(event) => this.props.updateModule(this.props.moduleId, this.props.moduleName)}>save</button>}
          
        </li>
      </div>
    );
  }
}

export default ModuleListItem;
