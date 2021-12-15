import { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Filter from "./components/Filter/Filter.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import { nanoid } from "nanoid";
import { get, save } from "./services/localStorage";

const CONTACTS_KEY = "contacts";
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const savedContacts = get(CONTACTS_KEY);
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      save(CONTACTS_KEY, contacts);
    }
  }

  addContact = ({ name, number }) => {
    const isName = this.checkName(name);
    if (isName) return alert(`${name} is already in contacts`);
    const obj = {
      id: nanoid(5),
      name,
      number,
    };
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, obj],
      };
    });
  };

  checkName = (nameValue) =>
    this.state.contacts.some(({ name }) => name === nameValue);

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  filterContacts = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} value={this.handleChange} />
        <ContactList
          contacts={this.state.contacts}
          filterContacts={this.filterContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
