
import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { contactService } from '../../services/contactService'
import { saveContact, removeContact } from '../../store/actions/contactAction'
import backIcon from '../../assets/img/back.png'
import deleteIcon from '../../assets/img/delete.png'
import './ContactEditPage.scss'

class _ContactEditPage extends Component {
    state = {
        contact: null,
        errMsg: ''
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        try {
            const contact = id ? await contactService.getContactById(id) : contactService.getEmptyContact()
            this.setState({ contact })
        } catch (err) {
            this.setState({ errMsg: 'Contact not found' })
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ contact: { ...prevState.contact, [field]: value } }))
    }

    onSaveContact = async (ev) => {
        ev.preventDefault()
        await this.props.saveContact({ ...this.state.contact })
        this.props.history.push('/contact')
    }

    onDeleteContact = async () => {
        await this.props.removeContact(this.state.contact._id)
        this.props.history.push('/contact')
    }

    render() {
        if (!this.state.contact) return <div>{this.state.errMsg || 'Loading...'}</div>
        const { name, email, phone, _id } = this.state.contact
        return (
            <div className="contact-edit-page">
                <div className="actions">
                    <Link to="/contact"><img src={backIcon} alt=""/></Link>
                    {_id && <button onClick={this.onDeleteContact}><img src={deleteIcon} alt=""/></button>}
                </div>
                <form onSubmit={this.onSaveContact}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input required type="text" id="name" value={name} onChange={this.handleChange} name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input required type="email" id="email" value={email} onChange={this.handleChange} name="email" />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input required type="text" id="phone" value={phone} onChange={this.handleChange} name="phone" />
                    </div>

                    <p>{this.state.errMsg}</p>
                    <button className="btn save-btn">Save Contact</button>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = {
    saveContact,
    removeContact
}

export const ContactEditPage = connect(null, mapDispatchToProps)(_ContactEditPage)
