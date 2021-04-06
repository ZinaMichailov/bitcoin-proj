
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { contactService } from '../../services/contactService'
import './ContactDetailsPage.scss'

export class ContactDetailsPage extends Component {
    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact()
    }

    async loadContact() {
        const contact = await contactService.getContactById(this.props.match.params.id)
        this.setState({ contact })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
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
                <button><Link to="/contact">Back</Link></button>
            </div>
        )
    }
}
