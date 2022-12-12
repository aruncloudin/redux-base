import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTodo } from "../../reducers/todoReducers";
import { addTodo, editTodo, fetchInput } from "./actions";

export default function Todo() {
  const { list, input } = useSelector(getTodo);
  const dispatch = useDispatch();

  const handleName = (event) => {
    dispatch(fetchInput({name: event.target.value}))
  };

  const save = () => {
    dispatch(input.id === 0 ? addTodo() : editTodo())
  }

  const edit = data => (event) => {
    dispatch(fetchInput(data))
  }

  return (
    <div>
      <Link to={"create"}>Create</Link>
      <div>
        <form>
          <input type="text" value={input.name} onChange={handleName} />
          {/* <span>{input.name}</span> */}
          <button type="button" onClick={save}>Save</button>
        </form>
      </div>
      <h1>Todo List</h1>
      <div>
        <ul>
          {list.map((d, i) => (
            <li key={i}>
                <div>
                    {d.name}
                    <button type="button" onClick={ edit(d)}>edit</button>
                </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
