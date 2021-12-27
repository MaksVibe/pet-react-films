import {
  useFetchTodosQuery,
  useDeleteTodoMutation,
} from "../../redux/todos/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => {
  const { data, isFetching } = useFetchTodosQuery();
  const [deleteTodo, { isLoading: isDeliting }] = useDeleteTodoMutation();

  const value = useSelector((state) => state.filter);
  const onFilterContacts = () => {
    return data.filter((contact) =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
  };

  return (
    !isFetching &&
    data && (
      <ul>
        {onFilterContacts().map(({ id, name, number }) => {
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button onClick={() => deleteTodo(id)} disabled={isDeliting}>
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
