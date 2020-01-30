import React from "react";
import {ListGroup, Row, Col} from 'react-bootstrap';

const GridComponent = ({deleteCourse, course, editCourse}) =>
    <div>
        <ListGroup>
        <ListGroup.Item> 
            <Row><Col>{course.title}</Col>
            <Col><p>Owned By</p></Col>
            <Col><p>Last Modified</p></Col>
            <Col sm="2"><div>
                <button onClick={(event) => deleteCourse(course)}>Delete</button>
                <button onClick={() => editCourse()}>Edit</button>
            </div></Col></Row>
        </ListGroup.Item>
        </ListGroup>
    </div>

export default GridComponent