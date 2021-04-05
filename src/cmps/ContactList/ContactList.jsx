import './ContactList.scss'
import { ContactPreview } from '../ContactPreview';

export const ContactList = ({ contacts, onSelectContact }) => {

    return (
        <div className="contact-list">
            {contacts && contacts.map(contact => <ContactPreview key={contact._id} contact={contact} onSelectContact={onSelectContact}  />)}
        </div>
    )
}

