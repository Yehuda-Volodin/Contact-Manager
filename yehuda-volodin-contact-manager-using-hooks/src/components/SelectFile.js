import React from 'react'
import PropTypes from 'prop-types';
import { Input, Label } from 'reactstrap';
import './ContactManager.css';


export default function SelectFile(props) {
    SelectFile.propTypes = {
        id: PropTypes.string.isRequired,
        fileTypes: PropTypes.string,
        labelInnerJSX: PropTypes.object.isRequired,
        labelStyle: PropTypes.object,
        onInput: PropTypes.func,
    }

    return (
        <>
            <Label
                style={{
                    ...{
                        "borderRadius": "5px",
                        "paddingLeft": "5px",
                        "paddingRight": "5px",
                        "cursor": "pointer",
                        "zIndex": "100"
                    },
                    ...props.labelStyle
                }}
                for={props.id}
                size='sm'
            >
                {props.labelInnerJSX}
            </Label>
            <Input
                style={{ "display": "none" }}
                id={props.id}
                accept={props.fileTypes}
                onInput={props.onInput}
                type="file"
                size="sm"
            />
        </>
    )
}