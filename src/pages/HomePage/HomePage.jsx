
import { Component } from 'react'
import { connect } from 'react-redux'
import { bitcoinService } from '../../services/bitcoinService'
import coinsIcon from '../../assets/img/coins.png'
import bitcoinIcon from '../../assets/img/bitcoin.png'

import './HomePage.scss'

class _HomePage extends Component {
    state = {
        rate: null
    }

    componentDidMount() {
        this.loadRate()
    }

    async loadRate() {
        if (!this.props.loggedinUser) return
        const rate = await bitcoinService.getRate(this.props.loggedinUser.coins)
        this.setState({ rate })
    }

    get rateFormatted() {
        return this.state.rate.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        })
    }

    render() {
        const { rate } = this.state
        const { loggedinUser } = this.props
        return (
            <div className="home-page">
                {loggedinUser && (
                    <div className="user-container">
                        <h2>Hello {loggedinUser.name}!</h2>
                        <div className="flex">
                            <img src={coinsIcon} alt="" /> 
                            <div>Coins: {loggedinUser.coins}</div> 
                        </div>
                        {rate && <div className="flex">
                            <img src={bitcoinIcon} alt="" /> 
                            <div>BTC: {this.rateFormatted}</div> 
                        </div>}
                    </div>
                )}
                {!loggedinUser && <div>go to login / sing up</div>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedinUser: state.userReducer.loggedinUser
    }
}

const mapDispatchToProps = {
    // login,
    // signup,
    // logout
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)
