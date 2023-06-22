"use client";
import Input from "@/app/app-ui/input/input";
import Button from "@/app/app-ui/button/button";
import './styles/todo.scss'
import {useState} from "react";

export default function Home() {
    const [show, setShow] = useState(false);
    const [inputAddTodoValue, setInputAddTodoValue] = useState('');
    const [inputValue, setInputValue] = useState('');

    const [todos, setTodos] = useState([
        {
            title: 'first buy tea',
            isCompleted: false,
            isEditing: false,
            id: 0,
        },
        {
            title: 'second buy tea',
            isCompleted: false,
            isEditing: true,
            id: 1,
        },
        {
            title: 'third buy tea',
            isCompleted: false,
            isEditing: false,
            id: 2,
        },
        {
            title: 'fourth buy tea',
            isCompleted: false,
            isEditing: false,
            id: 3,
        },
    ]);

    const inputAddTodoHandler = e => {
        e.preventDefault();
        setInputAddTodoValue(e.target.value);
    }

    const todoInputHandler = e => {
        e.preventDefault();
        setInputValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setTodos([...todos, {title: inputAddTodoValue, isCompleted: false, id: todos.length + 1}]);
        setInputAddTodoValue('');
    }

    const removeTodo = id => {
        setTodos(() => todos.filter(todo => todo.id !== id));
    }

    return (
        <div className="todo__wrapper">
            <div className="todo">
                <div className="todo__head">
                    <h2>Scheduler</h2>
                    <Input placeholder="Search" size="150px"/>
                </div>
                <div className="todo__input">
                    <form action="" style={{display: "flex", justifyContent: "space-between", width: '100%'}}>
                        <Input size="550px" placeholder="Text" callback={inputAddTodoHandler} inputValue={inputAddTodoValue} setInputValue={setInputAddTodoValue} />
                        <Button title="Add task" callback={handleSubmit} />
                    </form>
                </div>
                <div className="todo__info">
                    {todos.sort((a, b) => a.isCompleted - b.isCompleted).map(todo => {
                        return (
                            <div className={todo.isCompleted ? "todo__item completed" : 'todo__item'}>
                                <input type="checkbox" />
                                <div className="todo__item-title" style={{display: todo.isEditing ? 'none' : 'block'}}>
                                    <p>{todo.title}</p>
                                </div>
                                <div style={{display: todo.isEditing ? 'block' : 'none', flex: 1}}>
                                    <Input size="100%" isDisabled={show} placeholder={todo.title} callback={todoInputHandler} inputValue={inputValue} setInputValue={setInputValue} show={show} />
                                </div>
                                <div className="circle __star"></div>
                                <div className="circle __edit" onClick={() => setShow(!show)}></div>
                                <div className="circle __cross" onClick={() => removeTodo(todo.id)}></div>
                            </div>
                        )
                    })}
                </div>
                <div className="todo__complete">
                    <input type="checkbox"/>
                    <p>All tasks completed</p>
                </div>
            </div>
        </div>
    );
};