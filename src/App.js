import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import Filter from "./components/Filter/Filter.jsx";
import * as actions from "./redux/contacts/contactsAction";
import { connect } from "react-redux";
// import { get, save } from "./services/localStorage";
// import { useState, useEffect } from "react";

// const CONTACTS_KEY = "contacts";

const App = () => {
  // useEffect(() => {
  //   const savedContacts = get(CONTACTS_KEY);
  //   if (savedContacts) onAddContact(savedContacts);
  // }, [onAddContact]);

  // useEffect(() => {
  //   save(CONTACTS_KEY, contacts);
  // }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: {
      items: state.contacts.items,
      filter: state.contacts.filter,
    },
    // filter: state.contacts.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddContact: (contact) => dispatch(actions.addContact(contact)),
    onDeleteContact: (contact) => dispatch(actions.deleteContact(contact)),
    // onFilterContacts: value => dispatch(actions.filterContacts(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
