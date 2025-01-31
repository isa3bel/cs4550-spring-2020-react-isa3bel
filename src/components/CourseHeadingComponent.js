import React, {Component } from 'react'
import {Navbar} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { Col, Row} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

class CourseHeadingComponent extends Component {

    state ={
        newCourseTitle: '',
    }

    addCourseWithText = () => {
        this.props.addCourse(this.state.newCourseTitle)
        
    }

    updateForm = (newState) => {
        this.setState(newState)
    }

    render() {
        return (
            <div>
                <Navbar className="justify-content-between" bg="light">
                <Navbar.Brand><h1 className="d-none d-md-block">Course Manager</h1></Navbar.Brand>
                
                <FormControl
                onChange={(e) => this.updateForm({
                    newCourseTitle: e.target.value
                })} value={this.state.newCourseTitle} id="courseTitle"/>
                <Button variant="outline-success" onClick={this.addCourseWithText}>+</Button>
               
                </Navbar>
                
                <Row>
                    <Col>Course Name</Col>
                    <Col className="d-none d-sm-block"><p>Owned By</p></Col>
                    <Col className="d-none d-md-block"><p>Last Modified</p></Col>
                    <Col sm="2">
                        <div className="justify-content-end">
                            <button onClick={this.props.filterSortButton}><i className="fa fa-th-list"/></button>
                            <button ><i className="fa fa-sort-alpha-asc"/></button>
                        </div>
                    </Col>
                </Row>
            </div>
            );
    }
}

export default CourseHeadingComponent