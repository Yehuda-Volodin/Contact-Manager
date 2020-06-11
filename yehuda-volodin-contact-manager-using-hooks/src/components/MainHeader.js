import React from 'react'
import PropTypes from 'prop-types';

export default function MainHeader(props) {
    MainHeader.propTypes = {
        headerText: PropTypes.string.isRequired,
        headerStyle: PropTypes.object,
    }

    return (
        <h1
            className="mt-3"
            style={props.headerStyle}
            align="center"
        >
            {props.headerText}
        </h1>
    )
}