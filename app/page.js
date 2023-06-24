"use client";
import './styles/todo.scss'
import {useState} from "react";
import TodoForm from "@/app/component/todo-form/todo-form";
import TodoSearch from "@/app/component/todo-search/todo-search";
import Todo from "@/app/component/todo/todo";
import input from "@/app/app-ui/input/input";

export default function Home() {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState([
        {
            title: 'first buy tea',
            isCompleted: false,
        },
        {
            title: 'second buy tea',
            isCompleted: false,
        },
        {
            title: 'third buy tea',
            isCompleted: false,
        },
        {
            title: 'fourth buy tea',
            isCompleted: false,
        },
    ]);
    const createTodo = todo => {
        setTodos([...todos, todo]);

    }
    const removeTodo = todo => {
        setTodos(() => todos.filter(item => item !== todo));

    }
    const findTodo = e => {
        setValue(e.target.value);
    }

    const filteredTodos = todos.filter(todo => {
        return todo.title.toLowerCase().includes(value.toLowerCase());
    })

    return (
        <div className="todo__wrapper">
            <div className="todo">
                <TodoSearch onFind={findTodo} />
                <TodoForm onCreate={createTodo} />
                <div className="todo__info">
                    <ul>
                        {filteredTodos.sort((a, b) => a.isCompleted - b.isCompleted).map(todo => {
                            return <li><Todo todo={todo} removeTodo={removeTodo} /></li>
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
