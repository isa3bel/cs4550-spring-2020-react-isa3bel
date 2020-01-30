import React from 'react'
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Form, Col, Row} from 'react-bootstrap';

class CourseHeadingComponent extends React.Component {


    render() {
        return (
            <div>
                <Navbar className="justify-content-between" bg="light" expand="lg">
                <Navbar.Brand><h1>Course Manager</h1></Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Course Name" className="mr-sm-2"/>
                    <Button variant="outline-success" onClick={this.props.addCourse}>+</Button>
                </Form>
                </Navbar>
                <Row>
                    <Col>Course Name</Col>
                    <Col><p>Owned By</p></Col>
                    <Col><p>Last Modified</p></Col>
                    <Col sm="2">
                        <div>
                            <button>Filter</button>
                            <button>Sort</button>
                        </div>
                    </Col>
                </Row>
            </div>
            );
    }
}

export default CourseHeadingComponent