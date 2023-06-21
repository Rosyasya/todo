"use client";
import Input from "@/app/app-ui/input/input";
import Button from "@/app/app-ui/button/button";
import './styles/todo.scss'
import {useState} from "react";

export default function Home() {
    const [edit, setEdit] = useState(false);

    const todoList = [
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
            isCompleted: true,
        },
        {
            title: 'fourth buy tea',
            isCompleted: false,
        },
    ]

    return (
        <div className="todo__wrapper">
            <div className="todo">
                <div className="todo__head">
                    <h2>Scheduler</h2>
                    <Input placeholder="Search" size="150px"/>
                </div>
                <div className="todo__input">
                    <Input size="550px" placeholder="Text" />
                    <Button title="Add task" />
                </div>
                <div className="todo__info">
                    {todoList.sort((a, b) => a.isCompleted - b.isCompleted).map(el => {
                        return (
                            <div className={el.isCompleted ? "todo__item completed" : 'todo__item'}>
                                <input type="checkbox" checked={el.isCompleted} />
                                <div className="todo__item-title" style={{display: edit ? 'none' : 'block'}}>
                                    <p>{el.title}</p>
                                </div>
                                <div style={{display: edit ? 'block' : 'none', flex: 1}}>
                                    <Input size="100%"/>
                                </div>
                                <div className="circle __star"></div>
                                <div className="circle __edit"></div>g
                                <div className="circle __cross"></div>
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