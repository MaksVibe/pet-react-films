import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "../../redux/todos/todoSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filter);

  return (
    <input
      onChange={(e) => dispatch(filterContacts(e.target.value))}
      value={value}
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
  );
};

export default Filter;
