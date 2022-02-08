import {useState, useEffect} from 'react'

import {} from './styles.css'
import List from './List'
import Form from './Form'

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname: "mehmet",
            phone_number:"123123"
        },
        {
            fullname: "nazlı",
            phone_number:"434343"
        },
        {
            fullname: "ayşe",
            phone_number:"342278"
        }
    ])

    // useEffect(() => {
    //     console.log(contacts)
    // }, [contacts])


    return (
        <div id='container'>
        <h1>Contacts</h1>
        <Form addContact = {setContacts} contacts = {contacts}/>
        <List contacts = {contacts}/>
        </div>
    )
}
 
export default Contacts
