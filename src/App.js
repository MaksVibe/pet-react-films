import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Filter from "./components/Filter/Filter.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import { nanoid } from "nanoid";
import { get, save } from "./services/localStorage";

const CONTACTS_KEY = "contacts";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const savedContacts = get(CONTACTS_KEY);
    if (savedContacts) setContacts(savedContacts);
  }, []);

  useEffect(() => {
    save(CONTACTS_KEY, contacts);
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const obj = {
      id: nanoid(5),
      name,
      number,
    };
    setContacts(prevContacts => [...prevContacts, obj]);
  };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id =>
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} value={handleChange} />
      <ContactList
        contacts={contacts}
        filterContacts={filterContacts}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
