
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ContactList } from '../../cmps/ContactList'
import { ContactFilter } from '../../cmps/ContactFilter'
import { loadContacts } from '../../store/actions/contactAction'

import './ContactPage.scss'

class _ContactPage extends Component {
    state = {
        // contacts: null,
        filterBy: null
    }

    componentDidMount() {
        console.log(this.props);
        this.props.loadContacts(this.state.filterBy)
    }

    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
    }

    render() {
        const { contacts } = this.props
        return (
            <div className="contact-page">
                <ContactFilter onChangeFilter={this.onChangeFilter} />
                <ContactList contacts={contacts} />
                <button><Link to="/contact/edit">Add Contact</Link></button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contactReducer.contacts
    }
}

const mapDispatchToProps = {
    loadContacts
}

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)