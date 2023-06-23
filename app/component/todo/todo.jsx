import Input from "@/app/app-ui/input/input";
import './todo.scss'
import {useState} from "react";

const Todo = () => {
    const [show, setShow] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const todoInputHandler = e => {
        e.preventDefault();
        setInputValue(e.target.value);
    }

    const removeTodo = id => {
        setTodos(() => todos.filter(todo => todo.id !== id));
    }

    return (
        <div className={todo.isCompleted ? "todo__item completed" : 'todo__item'}>
            <input type="checkbox" />
            <div style={{flex: 1}}>
                <Input size="100%" placeholder={todo.title} callback={todoInputHandler} inputValue={inputValue} setInputValue={setInputValue} show={show} />
            </div>
            <div className="circle __star"></div>
            <div className="circle __edit" onClick={() => setShow(!show)}></div>
            <div className="circle __cross" onClick={() => removeTodo(todo.id)}></div>
        </div>
    );
};

export default Todo;