"use client";
import './styles/todo.scss'
import {useState} from "react";
import TodoForm from "@/app/component/todo-form/todo-form";
import TodoSearch from "@/app/component/todo-search/todo-search";
import Todo from "@/app/component/todo/todo";
import input from "@/app/app-ui/input/input";

export default function Home() {
    return (
        <div className="todo__wrapper">
            <div className="todo">
                <TodoSearch />
                <TodoForm />
                <div className="todo__info">
                    <ul>
                        {todos.sort((a, b) => a.isCompleted - b.isCompleted).map(todo => {
                            return <li><Todo /></li>
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