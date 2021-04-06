
import { Component } from 'react'
import { contactService } from '../../services/contactService'
import { ContactList } from '../../cmps/ContactList'
import { ContactFilter } from '../../cmps/ContactFilter'

import './ContactPage.scss'

export class ContactPage extends Component {
    state = {
        contacts: null,
        filterBy: null
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

    onDeleteContact = async (contactId) => {
        await contactService.deleteContact(contactId)
        this.loadContacts()
    }

    render() {
        const { contacts } = this.state
        return (
            <div className="contact-page">
                <ContactFilter onChangeFilter={this.onChangeFilter} />
                <ContactList onSelectContact={this.onSelectContact} contacts={contacts} />
            </div>
        )
    }
}
