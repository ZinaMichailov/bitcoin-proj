
import { Component } from 'react'
import { connect } from 'react-redux'
import { login, signup, logout } from '../../store/actions/userAction'

import './SignupPage.scss'

class _SignupPage extends Component {
    state = {
        name: '',
        email: 'puki@gmail.com',
        password: '1234'
    }

    handleChange = (ev) => {
        ev.preventDefault()
        const field = ev.target.name
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        this.setState({ [field]: value })
    }

    setLogin(ev) {
        ev.preventDefault()
        this.props.login({ ...this.state })
        this.props.history.push('/')
    }

    setSingUp(ev) {
        ev.preventDefault()
        this.props.signup({ ...this.state })
        this.props.history.push('/')
    }

    logout() {
        console.log(this.props);
        this.props.logout()
    }

    render() {
        const { name, email, password } = this.state
        const { loggedinUser } = this.props
        return (
            <section className="sign-up-page">
                {!loggedinUser && (
                    <div>
                        <form className="login" onSubmit={(ev) => this.setLogin(ev)}>
                            <label htmlFor="email">Enter your email:</label>
                            <input type="email" id="email" name="email" value={email} onChange={this.handleChange} />
                            <label htmlFor="password">Enter your password:</label>
                            <input type="text" id="password" name="password" value={password} onChange={this.handleChange} />
                            <button className="btn">Login</button>
                        </form>
                        <hr />
                        <form className="sign-up" onSubmit={(ev) => this.setSingUp(ev)}>
                            <label htmlFor="name">Enter your full name:</label>
                            <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />
                            <label htmlFor="email">Enter your email:</label>
                            <input type="email" id="email" name="email" value={email} onChange={this.handleChange} />
                            <label htmlFor="password">Enter your password:</label>
                            <input type="text" id="password" name="password" value={password} onChange={this.handleChange} />
                            <button className="btn">Sing up</button>
                        </form>
                    </div>
                )}
                {loggedinUser && (
                    <div className="logout">
                        <h2>Hi! {loggedinUser.name}</h2>
                        <button className="btn" onClick={() => this.logout()}>Logout</button>
                    </div>
                )}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.userReducer.users,
        loggedinUser: state.userReducer.loggedinUser
    }
}

const mapDispatchToProps = {
    login,
    signup,
    logout
}

export const SignupPage = connect(mapStateToProps, mapDispatchToProps)(_SignupPage)
