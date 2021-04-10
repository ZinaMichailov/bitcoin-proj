
import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getContactById } from '../../store/actions/contactAction'
import './ContactDetailsPage.scss'
import backIcon from '../../assets/img/back.png'
import editIcon from '../../assets/img/edit.png'

class _ContactDetailsPage extends Component {
    // state = {
    //     contact: null
    // }

    componentDidMount() {
        this.props.getContactById(this.props.match.params.id)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.getContactById(this.props.match.params.id)
        }
    }

    render() {
        const { contact } = this.props
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

const mapStateToProps = state => ({
    contact: state.contactReducer.currContact
})

const mapDispatchToProps = {
    getContactById
}

export const ContactDetailsPage = connect(mapStateToProps, mapDispatchToProps)(_ContactDetailsPage)
