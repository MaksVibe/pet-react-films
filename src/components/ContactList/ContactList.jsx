import {
  useFetchTodosQuery,
  useDeleteTodoMutation,
} from "../../redux/todos/todoSlice";

const ContactList = () => {
  const { data, isFetching } = useFetchTodosQuery();
  const [deleteTodo, { isLoading: isDeliting }] = useDeleteTodoMutation();

  return (
    !isFetching &&
    data && (
      <ul>
        {data.map(({ id, name, number }) => {
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
