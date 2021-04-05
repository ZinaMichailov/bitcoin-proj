
import { Component } from 'react'
import { HeaderMain } from '../../cmps/HeaderMain/HeaderMain'
import { userService } from '../../services/userService'
import { ContactPage } from '../ContactPage/ContactPage'

import './HomePage.scss'

export class HomePage extends Component {
    state = {
        user: null
    }

    componentDidMount() {
        this.loadUser()
    }

    async loadUser() {
        const user = await userService.getUser()
        this.setState({ user })
    }

    render() {
        const { user } = this.state
        return (
            user && <div className="home-page">
                <HeaderMain />
                <div className="user-container">
                    <h2>Hello { user.name }!</h2>
                    <div>Coins: { user.coins }</div>
                    <div>BTC: </div>
                </div>
                <ContactPage />
            </div>
        )
    }
}
