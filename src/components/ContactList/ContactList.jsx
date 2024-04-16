import Contact from "../Contact/Contact";
import s from "../Phonebook.module.css";

const ContactList = ({ contacts, onDelete }) => {
  if (!contacts.length) {
    return <h2>No available contacts</h2>;
  }
  return (
    <ul className={s.contact_list}>
      {contacts.map((contact) => (
        <Contact item={contact} key={contact.id} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
