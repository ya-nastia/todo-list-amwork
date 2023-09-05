import React from "react";
import Todo from "../Todo/Todo";
import './TodoList.scss';
import { useStore } from "../../store";
import { observer } from "mobx-react-lite";
import Loader from "../Loader/Loader";

const TodoList: React.FC = observer(() => {
    const store = useStore();

    if (store.isLoading) {
        return <div className="todo-list"><Loader /></div>
    };

    if (store.isError) {
        return <div className="error">Some Error</div>
    }

    return (
        <div className="todo-list">
            {
                store.todos.length === 0 ? 
                    <div className="todo-list__no-todos">No todos</div> : 
                    store.todos.map(todo => <Todo todo={todo} key={todo.id} />)
            }
        </div>
    )
});

export default TodoList;