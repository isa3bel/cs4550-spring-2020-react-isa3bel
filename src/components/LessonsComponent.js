import React, { button } from "react";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

class LessonsComponent extends React.Component {
  state = {
    editing: false,
    lessonName: "",
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

  clickedSave() {
    this.setState({ editing: !this.state.editing });
  }
  render() {
    return (
      
      <li class="nav-item">
        {
         
          !this.state.editing && (<Link
            className="nav-link wbdv-page-tab"
            to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lessons/${this.props.lessonId}`}
          >
            {this.props.title}
          </Link>)
        }
        {this.state.editing && (
          <input
            onChange={e =>
              this.updateNameForm({
                lessonName: e.target.value
              })
            }
            value={this.state.lessonName}
          ></input>
        )}
        {!this.state.editing && (
          <button onClick={() => this.isEditing()}><i className="fa fa-pencil" /></button>
        )}
        {!this.state.editing && (
          <button onClick={() => this.props.deleteLesson(this.props.lessonId)}>
          <i className="fa fa-trash" />
          </button>
        )}
        {this.state.editing && (
          <button
            onClick={() => {
              this.props.updateLesson(this.props.lessonId, {title:this.state.lessonName, _id: this.props.lessonId})
              this.clickedSave()
            }
            }
          >
          <i className="fa fa-check" />
          </button>
        )}
      </li>
    );
  }
}

export default LessonsComponent;
