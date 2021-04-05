
import { Component } from 'react'
import { HeaderMain } from '../../cmps/HeaderMain/HeaderMain'
import { userService } from '../../services/userService'
import { ContactPage } from '../ContactPage/ContactPage'
import { StatisticPage } from '../StatisticPage/StatisticPage'

import './HomePage.scss'

export class HomePage extends Component {
    state = {
        user: null,
        isHomePage: true,
        isContactPage: false,
        isStatisticPage: false
    }

    componentDidMount() {
        this.loadUser()
    }

    async loadUser() {
        const user = await userService.getUser()
        this.setState({ user })
    }

    onContactPage = (page) => {
        if (page === 'isHomePage') this.setState({ isHomePage: true, isContactPage: false, isStatisticPage: false })
        else if (page === 'isContactPage') this.setState({ isHomePage: false, isContactPage: true, isStatisticPage: false })
        else this.setState({ isHomePage: false, isContactPage: false, isStatisticPage: true })
    }

    render() {
        const { user, isHomePage, isContactPage, isStatisticPage } = this.state
        return (
            user && <div className="home-page">
                <HeaderMain onContactPage={this.onContactPage} />
                {isHomePage && ( 
                    <div className="user-container">
                        <h2>Hello { user.name }!</h2>
                        <div>Coins: { user.coins }</div>
                        <div>BTC: </div>
                    </div>
                )}
                {isContactPage && <ContactPage />}
                {isStatisticPage && <StatisticPage />}
            </div>
        )
    }
}
