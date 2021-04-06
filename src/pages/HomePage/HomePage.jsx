
import { Component } from 'react'
import { userService } from '../../services/userService'
import { bitcoinService } from '../../services/bitcoinService'
import coinsIcon from '../../assets/img/coins.png'
import bitcoinIcon from '../../assets/img/bitcoin.png'

import './HomePage.scss'

export class HomePage extends Component {
    state = {
        user: null,
        rate: null
    }

    componentDidMount() {
        this.loadUser()
    }

    async loadUser() {
        const user = await userService.getUser()
        this.setState({ user }, this.loadRate)
    }

    async loadRate() {
        const rate = await bitcoinService.getRate(this.state.user.coins)
        this.setState({ rate })
    }

    get rateFormatted() {
        return this.state.rate.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        })
    }

    render() {
        const { user, rate } = this.state
        return (
            user && <div className="home-page">
                <div className="user-container">
                    <h2>Hello {user.name}!</h2>
                    <div className="flex">
                        <img src={coinsIcon} alt="" /> 
                        <div>Coins: {user.coins}</div> 
                    </div>
                    {rate && <div className="flex">
                        <img src={bitcoinIcon} alt="" /> 
                        <div>BTC: {this.rateFormatted}</div> 
                    </div>}
                </div>
            </div>
        )
    }
}
