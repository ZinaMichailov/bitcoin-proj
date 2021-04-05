
import { Component } from 'react'

import './ContactFilter.scss'

export class ContactFilter extends Component {
    state = {
        term: ''
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter({ ...this.state })
        })
    }

    render() {
        const { term } = this.state
        return (
            <form className="contact-filter" onSubmit={(ev) => ev.preventDefault()}>
                <label htmlFor="search">Search</label>
                <input type="text" id="search" name="term" value={term} onChange={this.handleChange} />
            </form>
        )
    }
}
