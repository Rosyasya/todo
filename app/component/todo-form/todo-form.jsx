import Input from "@/app/app-ui/input/input";
import Button from "@/app/app-ui/button/button";
import './todo-form.scss'
import {useState} from "react";

const TodoForm = () => {
    const [todos, setTodos] = useState([
        {
            title: 'first buy tea',
            isCompleted: false,
            id: 0,
        },
        {
            title: 'second buy tea',
            isCompleted: false,
            id: 1,
        },
        {
            title: 'third buy tea',
            isCompleted: false,
            id: 2,
        },
        {
            title: 'fourth buy tea',
            isCompleted: false,
            id: 3,
        },
    ]);

    const [value, setValue] = useState('');
    const inputAddTodoHandler = e => {
        e.preventDefault();
        setValue(e.target.value);
    }

    const createTodo = e => {
        e.preventDefault();
        setTodos([...todos, {title: value, isCompleted: false, id: todos.length + 1}]);
        setValue('');
    }

    return (
        <div className="todo__input">
            <form action="" style={{display: "flex", justifyContent: "space-between", width: '100%'}}>
                <Input size="550px" placeholder="Text" callback={inputAddTodoHandler} value={value} />
                <Button isDisabled={value === ''} title="Add task" callback={createTodo} />
            </form>
        </div>
    );
};

export default TodoForm;