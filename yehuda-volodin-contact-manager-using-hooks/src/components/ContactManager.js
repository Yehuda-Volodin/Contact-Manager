import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap';
import axios from "axios";
import './ContactManager.css';

import SelectFile from './SelectFile';
import MainHeader from './MainHeader';
import AddContact from './AddContact';
import ContactList from './ContactList';

import defaultBg from './defaultBg.jpg';
import selectBg from './selectBg.png';

export default function ContactManager() {
    const [contacts, setContacts] = useState(["First Contact"]);
    const [backgroundFile, setBackgroundFile] = useState(defaultBg);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/Yehuda-Volodin/fake-server/contacts_list'
        ).then(res => {
            setContacts([...res.data]);
        }).catch((err) => {
            alert(err);
        });
    }, []);

    function selectBackgroundFileInputHandler(e) {
        const newBackgroundFile = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (function () { return function (e) { setBackgroundFile(e.target.result); }; })();
        reader.readAsDataURL(newBackgroundFile);
    }

    function addContact(name) {
        setContacts([...contacts, name]);
    }

    function deleteContact(id) {
        let newContacts = [...contacts];
        newContacts.splice(id, 1);
        setContacts([...newContacts])
    }

    return (
        <Container
            className="contactManager fontSize"
            style={{ "backgroundImage": `url(${backgroundFile})` }}
        >
            <SelectFile
                id="selectBackgroundFile"
                fileTypes=".jpg, .jpeg, .png"
                labelInnerJSX={
                    <img
                        src={selectBg}
                        alt="Bg."
                        width="40"
                        height="40"
                    />
                }
                labelStyle={{
                    "position": "fixed",
                    "right": "2%",
                    "color": "#ffc107",
                    "border": "thin solid #ffc107"                   
                }}
                onInput={selectBackgroundFileInputHandler}
            />
            <MainHeader headerText="Contact Manager" headerStyle={{ "fontFamily": "fantasy" }} />
            <AddContact handleSubmit={addContact} />
            <ContactList contactsData={contacts} handleDelete={deleteContact} handleEdit={setContacts}/>
        </Container>
    );
}
