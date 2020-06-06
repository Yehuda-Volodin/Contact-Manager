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

    return (
        <Container className="contactManager">
            <h1 className="mt-3" align="center" >
                Contact Manager
            </h1>
            <AddContact handleSubmit={addContact}/>
            <ContactList contactsData={contacts}/>
        </Container>
    );
}
