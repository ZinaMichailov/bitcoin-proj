
import { Link } from 'react-router-dom'
import './ContactPreview.scss'

export const ContactPreview = ({contact}) => {

    return (
        <Link to={'/contact/' + contact._id}>
            <div className="contact-preview">
                <img src={`https://robohash.org/${contact._id}`} alt="" />
                <h4>{contact.name}</h4>
            </div>
        </Link>
    )
}

