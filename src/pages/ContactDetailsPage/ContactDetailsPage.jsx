
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { contactService } from '../../services/contactService'
import './ContactDetailsPage.scss'
import backIcon from '../../assets/img/back.png'
import editIcon from '../../assets/img/edit.png'

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
                <div className="actions">
                    <Link to="/contact"><img src={backIcon} alt=""/></Link>
                    <Link to={'/contact/edit/' + contact._id}><img src={editIcon} alt=""/></Link>
                </div>
                <img src={`https://robohash.org/${contact._id}`} alt="" />
                <h3>{contact.name}</h3>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
            </div>
        )
    }
}
