import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Row, Col, Button, Form, Label, Input } from 'reactstrap';
import './ContactManager.css';


export default function AddPerson(props) {
    AddPerson.propTypes = {
        handleSubmit: PropTypes.func.isRequired,
    }

    const [person, setPerson] = useState("");

    function handleChange(e) {
        setPerson(e.target.value);
    }

    function handleSubmit(e) {
        if (person !== '') {
            props.handleSubmit(person);
            setPerson(''); 
        }
        e.preventDefault();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="align-items-end">
                <Col
                    xs="8"
                    sm="7"
                    md="6"
                    lg="5"
                    xl="4"
                >
                    <Label for="newContact" size="md">
                        Enter new contact name
                    </Label>
                    <Input
                        type="text"
                        id="newContact"
                        placeholder="New contact name"
                        onChange={handleChange}
                        value={person}
                        bsSize="lg"
                    />
                </Col>
                <Col>
                    <Button
                        type="submit"
                        color="success"
                        size="lg"
                    >
                        Add
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}