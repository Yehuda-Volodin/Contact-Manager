import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Row, Col, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import './ContactManager.css';

export default function ContactList(props) {
    ContactList.propTypes = {
        contactsData: PropTypes.arrayOf(PropTypes.string).isRequired,
    }

    const [itemId, setItemId] = useState(null);

    function listGroupItemsOnClickHandler(e) {
        setItemId(e.target.id.split("-")[1]);
    }

    function deleteBadgeOnClickHandler(e) {
        e.stopPropagation();

        if (e.target.parentNode.id.split("-")[1] == props.contactsData.length - 1 && e.target.parentNode.id.split("-")[1] == itemId) {
            setItemId(null);
        }
        props.handleDelete(e.target.parentNode.id)
    }

    const listGroupItems = props.contactsData.map((element, index) =>
        <ListGroupItem
            id={'listGroupItem-' + index}
            key={index}
            active={itemId == index ? true : false}
            action
            onClick={listGroupItemsOnClickHandler}
        >
            <Row id={'row-' + index} className="justify-content-between">
                <Col id={'col1-' + index}>
                    {element}
                </Col>
                <Col
                    id={'col2-' + index}
                    className="horizontalAlignEnd"
                    xs="4"
                    sm="4"
                    md="2"
                    lg="2"
                    xl="2"
                >
                    <Badge
                        pill
                        color="danger"
                        onClick={deleteBadgeOnClickHandler}
                    >
                        Delete
                    </Badge>
                </Col>
            </Row>
        </ListGroupItem>
    );

    return (
        <ListGroup className="mt-3 mb-3 maxHeightOverflow">
            {listGroupItems}
        </ListGroup>
    )
}