import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Row, Col, Button, Form, Label, Input } from 'reactstrap';
import './ContactManager.css';

export default function AddContact(props) {
    AddContact.propTypes = {
        handleSubmit: PropTypes.func.isRequired,
    }

    const [contact, setContact] = useState("");

    function handleChange(e) {
        setContact(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (contact !== '') {
            props.handleSubmit(contact);
            setContact('');
        }
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
                        value={contact}
                        bsSize="lg"
                        className="fontSize"
                    />
                </Col>
                <Col>
                    <Button
                        type="submit"
                        color="success"
                        size="lg"
                        className="fontSize"
                    >
                        Add
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}