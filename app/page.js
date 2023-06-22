"use client";
import './styles/todo.scss'
import {useState} from "react";
import TodoForm from "@/app/component/todo-form/todo-form";
import TodoSearch from "@/app/component/todo-search/todo-search";
import Todo from "@/app/component/todo/todo";
import input from "@/app/app-ui/input/input";

export default function Home() {
    const [inputAddTodoValue, setInputAddTodoValue] = useState('');

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

    const removeTodo = id => {
        setTodos(() => todos.filter(todo => todo.id !== id));
    }

    const createTodo = e => {
        e.preventDefault();
        setTodos([...todos, {title: inputAddTodoValue, isCompleted: false, id: todos.length + 1}]);
        setInputAddTodoValue('');
    }

    return (
        <div className="todo__wrapper">
            <div className="todo">
                <TodoSearch />
                <TodoForm inputAddTodoValue={inputAddTodoValue} setInputAddTodoValue={setInputAddTodoValue} callback={createTodo} />
                <div className="todo__info">
                    <ul>
                        {todos.sort((a, b) => a.isCompleted - b.isCompleted).map(todo => {
                            return <li><Todo todo={todo} setTodos={setTodos} removeTodo={removeTodo} /></li>
                        })}
                    </ul>
                </div>
                <div className="todo__complete">
                    <input type="checkbox"/>
                    <p>All tasks completed</p>
                </div>
            </div>
        </div>
    );
};