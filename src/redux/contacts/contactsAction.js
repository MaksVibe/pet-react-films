import { createAction, nanoid } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/add", (contact) => ({
  payload: {
    ...contact,
    id: nanoid(5),
  },
}));

export const deleteContact = createAction("contacts/delete");
// export const filterContacts = createAction("contacts/filter");
