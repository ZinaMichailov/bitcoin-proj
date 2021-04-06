
import { Component } from 'react'
import { HeaderMain } from '../../cmps/HeaderMain/HeaderMain'
import { userService } from '../../services/userService'
import { bitcoinService } from '../../services/bitcoinService'
import { ContactPage } from '../ContactPage/ContactPage'
import { StatisticPage } from '../StatisticPage/StatisticPage'

import './HomePage.scss'

export class HomePage extends Component {
    state = {
        user: null,
        rate: null,
        isHomePage: true,
        isContactPage: false,
        isStatisticPage: false
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

    onPage = (page) => {
        if (page === 'isHomePage') this.setState({ isHomePage: true, isContactPage: false, isStatisticPage: false })
        else if (page === 'isContactPage') this.setState({ isHomePage: false, isContactPage: true, isStatisticPage: false })
        else this.setState({ isHomePage: false, isContactPage: false, isStatisticPage: true })
    }

    render() {
        const { user, rate, isHomePage, isContactPage, isStatisticPage } = this.state
        return (
            user && <div className="home-page">
                <HeaderMain onPage={this.onPage} />
                {isHomePage && ( 
                    <div className="user-container">
                        <h2>Hello { user.name }!</h2>
                        <div>Coins: { user.coins }</div>
                        {rate && <div>BTC: {rate}</div>}
                    </div>
                )}
                {isContactPage && <ContactPage />}
                {isStatisticPage && <StatisticPage />}
            </div>
        )
    }
}
