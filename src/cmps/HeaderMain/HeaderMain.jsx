
import './HeaderMain.scss'

export  function HeaderMain({onContactPage}) {
    return (
        <header>
            <div className="logo">BITCoin.</div>
            <nav>
                <div onClick={() => onContactPage('isHomePage')}>Home</div>
                <div onClick={() => onContactPage('isContactPage')}>Contacts</div>
                <div onClick={() => onContactPage('isStatisticPage')}>Statistics</div>
            </nav>
        </header>
    )
}

