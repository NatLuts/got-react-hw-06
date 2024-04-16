import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactsData from "./assets/contacts.json";
import { useEffect, useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("contacts"));
    if (savedContacts?.length) {
      return savedContacts;
    }
    return ContactsData;
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  const addContact = (contact) => setContacts((prev) => [...prev, contact]);

  const getFilteredContacts = () => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox search={search} onSearch={setSearch} />
      <ContactList
        contacts={filteredContacts}
        onDelete={handleDelete}
        search={search}
      />
    </div>
  );
};

export default App;
