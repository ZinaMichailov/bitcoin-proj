
import { NavLink } from 'react-router-dom'
import './HeaderMain.scss'

export  function HeaderMain() {
    return (
        <header>
            <div className="logo">BITCoin.</div>
            <nav>
                <div><NavLink exact to="/" activeClassName="active-nav">Home</NavLink></div>
                <div><NavLink to="/contact" activeClassName="active-nav">Contacts</NavLink></div>
                <div><NavLink to="/statistic" activeClassName="active-nav">Statistics</NavLink></div>
            </nav>
        </header>
    )
}

