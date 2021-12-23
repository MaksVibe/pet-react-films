import { deleteContact } from "../../redux/contacts/contactsAction";
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const value = useSelector((state) => state.contacts.filter);
  const onFilterContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
  };
  const dispatch = useDispatch();

  return (
    contacts && (
      <ul>
        {onFilterContacts().map(({ id, name, number }) => {
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button onClick={() => dispatch(deleteContact(id))} type="button">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default ContactList;
