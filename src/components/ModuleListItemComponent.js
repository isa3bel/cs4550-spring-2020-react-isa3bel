import React, { Col} from "react";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

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
          {!this.state.editing && (
            <Link
              to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}`}
            >
              {this.props.title}
            </Link>
          )}
          {this.state.editing && (
            <input
              onChange={e =>
                this.updateNameForm({
                  moduleName: e.target.value
                })
              }
              value={this.state.moduleName}
            ></input>
          )}
          {!this.state.editing && (
            <button
              onClick={() => this.props.deleteModule(this.props.moduleId)}
            >
            <i className="fa fa-trash" />
            </button>
          )}
          {!this.state.editing && (
            <button onClick={event => this.isEditing()}><i className="fa fa-pencil" /></button>
          )}
          {this.state.editing && (
            <button
              onClick={event =>
                this.props.updateModule(
                  this.props.moduleId,
                  this.props.moduleName
                )
              }
            >
            <i className="fa fa-check" />
            </button>
          )}
        </li>
      </div>
    );
  }
}

export default ModuleListItem;
