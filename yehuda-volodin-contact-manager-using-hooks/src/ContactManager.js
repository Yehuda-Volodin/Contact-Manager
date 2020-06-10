import React, { useState, useEffect } from 'react'
import { Container, Input, Label } from 'reactstrap';
import './ContactManager.css';

import MainHeader from './MainHeader';
import AddContact from './AddContact';
import ContactList from './ContactList';

import defaultBg from './defaultBg.jpg';
import selectBg from './selectBg.png';

export default function ContactManager() {
    const [contacts, setContacts] = useState(["1"]);
    const [backgroundFile, setBackgroundFile] = useState(defaultBg);

    useEffect(() => {
        setContacts(["Agent K", "Thomas Anderson", "Bruce Wayne"])
    }, []);

    function selectBackgroundFileInputHandler(e){
        const newBackgroundFile = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (function() { return function(e) { setBackgroundFile(e.target.result); }; })();
        reader.readAsDataURL(newBackgroundFile);
    }

    function addContact(name) {
        setContacts([...contacts, name]);
    }

    function deleteContact(id) {
        let newContacts = contacts;
        newContacts.splice(id, 1);
        setContacts([...newContacts])
    }

    return (
        <Container 
            className="contactManager fontSize"
            style={{ "backgroundImage" : `url(${backgroundFile})` }}
        >
            <Label
                for="selectBackgroundFile"
                size='sm'
                className="positionFixedRight-2 selectBgFileLabel"               
            >
                <img src={selectBg} alt="Bg." width="40" height="40" />
            </Label>
            <Input
                type="file"
                id="selectBackgroundFile"
                accept=".jpg, .jpeg, .png"
                size="sm"
                className="displayNone"
                onInput={selectBackgroundFileInputHandler}
            />
            <MainHeader headerText="Contact Manager" headerStyle={{ "fontFamily": "fantasy" }}/>
            <AddContact handleSubmit={addContact} />
            <ContactList contactsData={contacts} handleDelete={deleteContact} />
        </Container>
    );
}
