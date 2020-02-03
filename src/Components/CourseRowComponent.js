import React from "react";
import {ListGroup, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';
class CourseRowComponent extends React.Component {

    state = {
        editing: false,
        courseName: '',
        selected: false,
    }

    updateNameForm = (newState) => {
        this.setState(newState)
    }

    isEditing() {
        this.setState({editing: !this.state.editing})

    }

    clickedSave = (courseName) => {
        this.props.updateCourse(this.props.id, courseName);
        this.setState({editing: !this.state.editing});
    }

    selected = () => {
        this.setState({selected: !this.state.selected})
        
    }

    showEditor = () => {
        this.props.showCourseEditor();
    }

    render() {
        return(
        <div>
            <ListGroup >
            <ListGroup.Item onClick={this.selected} style={ { 'backgroundColor': this.state.selected ? 'lightblue' : 'white' } }> 
                <Row>
                {
                    !this.state.editing && <Col  onClick={this.showEditor}>{this.props.course.title}</Col>
                }
                {
                    this.state.editing &&
                    <Col><input onChange={(e) => this.updateNameForm({
                        courseName: e.target.value
                    })} value={this.state.courseName}></input></Col>
                }
                <Col className="d-none d-sm-block"><p>Isabel</p></Col>
                <Col className="d-none d-md-block"><p>Yesterday</p></Col>
                <Col sm="2"><div>
                    {
                       !this.state.editing && <button onClick={(event) => this.props.deleteCourse(this.props.course)}>Delete</button>
                    }
                    {
                        !this.state.editing &&
                        <button onClick={(event) => this.isEditing()}><FontAwesomeIcon icon="coffee"/></button>
                    }
                    {
                        this.state.editing &&
                        <button onClick={(event) => this.clickedSave(this.state.courseName)} >Save</button>
                    }
                    
                </div></Col></Row>
            </ListGroup.Item>
            </ListGroup>
        </div>);
    }
}

export default CourseRowComponent;