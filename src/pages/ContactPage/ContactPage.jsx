
import { Component } from 'react'
import { contactService } from '../../services/contactService'
import { ContactList } from '../../cmps/ContactList'

import './ContactPage.scss'

export class ContactPage extends Component {
    state = {
        contacts: null,
        filterBy: null,
        selectedContactId: null
    }

    componentDidMount() {
        this.loadContacts()
    }

    async loadContacts() {
        const contacts = await contactService.getContacts(this.state.filterBy)
        this.setState({ contacts })
    }

    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
    }

    onSelectContact = (contactId) => {
        this.setState({ selectedContactId: contactId })
    }

    onDeleteContact = async (contactId) => {
        await contactService.deleteContact(contactId)
        this.setState({ selectedRobotId: null })
        this.loadContacts()
    }

    render() {
        const { contacts, selectedContactId } = this.state
        return (
            <div className="contact-page">
                <h2>Contacts</h2>
                {!selectedContactId && <ContactList onSelectContact={this.onSelectContact} contacts={contacts} />}
            </div>
        )
    }
}
