import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function PeopleList(props) {
    PeopleList.propTypes = {
        peopleData: PropTypes.arrayOf(PropTypes.string).isRequired,
    }

    const [itemId, setItemId] = useState(null);

    function listGroupItemsOnClickHandler (e) {
        setItemId(e.target.id)
    }

    const listGroupItems = props.peopleData.map((val, index) =>
        <ListGroupItem active={itemId==index ? true : false} action onClick={listGroupItemsOnClickHandler} id={index} key={index}>{val}</ListGroupItem>
    );

    return (
        <ListGroup className="mt-3 mb-3">
            {listGroupItems}
        </ListGroup>
    )
}