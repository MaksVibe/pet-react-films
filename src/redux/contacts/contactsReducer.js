import { createReducer, createSlice, combineReducers } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "./contactsAction";

const itemsReducer = createReducer([], (builder) => {
  builder
    .addCase(addContact, (state, { payload }) => [...state, payload])
    .addCase(deleteContact, (state, { payload }) =>
      state.filter(({ id }) => id !== payload)
    );
  //   [addContact]: (state, { payload }) => [...state, payload],
  //   [deleteContact]: (state, { payload }) =>
  //     state.filter(contact => contact.id !== payload),
});

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterContacts: (_, { payload }) => payload,
  },
});

// const filterReducer = createReducer([], builder => {
//   builder.addCase(filterContacts, (_, { payload }) => payload);
// });

const contactsReducer = combineReducers({
  items: itemsReducer,
  [filterSlice.name]: filterSlice.reducer,
});

export const { filterContacts } = filterSlice.actions;

export default contactsReducer;
