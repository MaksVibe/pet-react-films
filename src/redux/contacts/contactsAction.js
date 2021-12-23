export const addContact = (contact) => ({
  type: "contacts/add",
  payload: contact,
});

export const deleteContact = (contact) => ({
  type: "contacts/delete",
  payload: contact,
});

export const filterContacts = () => ({
  type: "contacts/filter",
});
