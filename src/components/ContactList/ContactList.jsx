const ContactList = ({ filterContacts, deleteContact }) => {
  return (
    <ul>
      {filterContacts().map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button onClick={() => deleteContact(id)} type="button">
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
