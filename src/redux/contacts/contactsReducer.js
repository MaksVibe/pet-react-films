import { combineReducers } from "redux";

const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "contacts/add":
      return payload;

    case "contacts/delete":
      return state.contacts.filter((contact) => contact.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case "contacts/filter":
      return payload;

    default:
      return state;
  }
};

const prevstateReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default prevstateReducer;
