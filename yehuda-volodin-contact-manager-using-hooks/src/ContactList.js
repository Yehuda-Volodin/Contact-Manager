import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

export default function ContactList(props) {
    ContactList.propTypes = {
        contactsData: PropTypes.arrayOf(PropTypes.string).isRequired,
    }

    const [itemId, setItemId] = useState(null);

    function listGroupItemsOnClickHandler(e) {
        setItemId(e.target.id);
    }

    function deleteBadgeOnClickHandler(e) {
        e.stopPropagation();

        if(e.target.parentNode.id == props.contactsData.length-1 && e.target.parentNode.id == itemId){
            setItemId(null);
        }
        props.handleDelete(e.target.parentNode.id)
    }

    const listGroupItems = props.contactsData.map((element, index) =>
        <ListGroupItem
            active={itemId == index ? true : false}
            action
            onClick={listGroupItemsOnClickHandler}
            id={index}
            key={index}
        >
            {element}
            <> </>
            <Badge
                pill
                color="danger"
                onClick={deleteBadgeOnClickHandler}
            >
                Delete
            </Badge>
        </ListGroupItem>
    );

    return (
        <ListGroup className="mt-3 mb-3">
            {listGroupItems}
        </ListGroup>
    )
}