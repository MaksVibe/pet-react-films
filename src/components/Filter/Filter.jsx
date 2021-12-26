import { useState } from "react";
import { useGetTodoQuery } from "../../redux/todos/todoSlice";

const Filter = () => {
  const [value, setValue] = useState("");
  const { data } = useGetTodoQuery();

  const heandleChange = (e) => {
    setValue(e.target.value);
    data.filter((contact) =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
  };

  return (
    <input
      onChange={heandleChange}
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
