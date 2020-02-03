import React, {Component} from 'react'
import Col from 'react'
import Doc from "../document2.jpg"

class CourseCard extends React.Component {

  state = {
    editing: false,
    courseName: '',
  }

  updateNameForm = (newState) => {
      this.setState(newState)
  }

  isEditing() {
      this.setState({editing: !this.state.editing})

  }

  clickedSave = (courseName) => {
      console.log("key from row shiuld be id: " + this.props.id)
      this.props.updateCourse(this.props.id, courseName);
      this.setState({editing: !this.state.editing});
  }

  render() {
      return(
        <div className="card"
         styles={{width: '18rem'}}>
          <img className="card-img-top"
                   src={Doc}/>
        <div className="card-body">
          {
            !this.state.editing && <h5 className="card-title">{this.props.course.title}</h5>
          }
          {
            this.state.editing &&
            <input onChange={(e) => this.updateNameForm({
                courseName: e.target.value
            })} value={this.state.newCourseTitle}></input>
          }
          <p>Last modified yesterday</p>
          <p>Owned by Isabel</p>
          <div>
            {
              !this.state.editing &&
              <button onClick={(event) => this.isEditing()}>Edit</button>
            }
            {
              !this.state.editing && <button onClick={(event) => this.props.deleteCourse(this.props.course)}>Delete</button>
            }
            {
              this.state.editing &&
              <button onClick={(event) => this.clickedSave(this.state.courseName)} >Save</button>
            }
          </div>
        </div>
      </div>
      )
    }
  
  
}
  
export default CourseCard;


