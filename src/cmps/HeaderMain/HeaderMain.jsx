
import './HeaderMain.scss'

export  function HeaderMain({onPage}) {
    return (
        <header>
            <div className="logo">BITCoin.</div>
            <nav>
                <div onClick={() => onPage('isHomePage')}>Home</div>
                <div onClick={() => onPage('isContactPage')}>Contacts</div>
                <div onClick={() => onPage('isStatisticPage')}>Statistics</div>
            </nav>
        </header>
    )
}

