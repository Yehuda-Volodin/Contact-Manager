import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap';
import './ContactManager.css';
import AddContact from './AddContact';
import ContactList from './ContactList';

export default function ContactManager() {
    const [contacts, setContacts] = useState(["1"]);
    useEffect(() => {
        setContacts(["Agent K", "Thomas Anderson", "Bruce Wayne"])
    }, []);

    function addContact(name) {
        setContacts([...contacts, name]);
    }

    function deleteContact(id) {
        let newContacts = contacts;
        newContacts.splice(id, 1);
        setContacts([...newContacts])
    }

    return (
        <Container className="contactManager">
            <h1 className="mt-3" align="center" >
                Contact Manager
            </h1>
            <AddContact handleSubmit={addContact} />
            <ContactList contactsData={contacts} handleDelete={deleteContact} />
        </Container>
    );
}
