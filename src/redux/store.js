import { devToolsEnhancer } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { createStore } from "redux";
import prevstateReducer from "./contacts/contactsReducer";

// const rootReducer = combineReducers({
//   prevstateReducer,
// });

const store = createStore(prevstateReducer, devToolsEnhancer());

// const initialState = {
//   contacts: [{ id: nanoid(5), name: "Charly", number: 9876543 }],
//   filter: "",
// };

export default store;
