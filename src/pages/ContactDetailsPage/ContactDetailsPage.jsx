
import { Component } from 'react'
import './ContactDetailsPage.scss'
import { contactService } from '../../services/contactService'

export class ContactDetailsPage extends Component {
    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact()
    }

    async loadContact() {
        const contact = await contactService.getContactById(this.props.selectedContactId)
        this.setState({ contact })
    }

    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading Contact...</div>
        return (
            <div className="contact-details-page">
                <img src={`https://robohash.org/${contact._id}`} alt="" />
                <h3>{contact.name}</h3>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <button onClick={() => this.props.onDeleteContact(contact._id)}>Delete</button>
            </div>
        )
    }
}
