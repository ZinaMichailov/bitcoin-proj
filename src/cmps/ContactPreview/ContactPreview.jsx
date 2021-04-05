
import './ContactPreview.scss'

export const ContactPreview = ({contact, onSelectContact}) => {

    return (
        <div className="contact-preview" onClick={() => onSelectContact(contact._id)}>
            <img src={`https://robohash.org/${contact._id}`} alt="" />
            <p>{contact.name}</p>
        </div>
    )
}

