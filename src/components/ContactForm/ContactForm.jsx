import { useState } from "react";

const ContactForm = ({ addContact, contacts }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    contacts.some(({ name }) => name === e.target.name.value)
      ? alert(`${name} is already in contacts`)
      : addContact({ name, number });

    reset();
  };

  const handleChange = e => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "number":
        setNumber(e.target.value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={name}
        type="text"
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        onChange={handleChange}
        value={number}
        type="tel"
        name="number"
        placeholder="Number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
