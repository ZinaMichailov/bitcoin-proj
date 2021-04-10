import { Component } from 'react'
import { connect } from 'react-redux'
import { addMove } from '../../store/actions/userAction'
import './TransferFund.scss'


class _TransferFund extends Component {
    state = {
        amount: ''
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ [field]: value })
    }

    async transfer(ev) {
        ev.preventDefault()
        await this.props.addMove(this.props.contact, this.state.amount)
        this.state.amount = ''
    }

    render() {
        const { contact } = this.props
        const { amount } = this.state
        return (
            <section className="transfer-fund">
                <h4>Transfer coins to {contact.name}</h4>
                <form onSubmit={(ev) => this.transfer(ev)}>
                    <label htmlFor="amount">Amount:</label>
                    <input type="number" id="amount" name="amount" value={amount} onChange={this.handleChange} />
                    <button className="btn">Transfer</button>
                </form>
            </section>
        )
    }
}

const mapDispatchToProps = {
    addMove
}

export const TransferFund = connect(null, mapDispatchToProps)(_TransferFund)

