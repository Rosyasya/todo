"use client";
import Input from "@/app/app-ui/input/input";
import Button from "@/app/app-ui/button/button";
import './styles/todo.scss'
import {useState} from "react";

export default function Home() {
    const [edit, setEdit] = useState(false);
    let title = 'title';

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
                    <div className="todo__item">
                        <input type="checkbox"/>
                        <div className="todo__item-title" style={{display: edit ? 'none' : 'block'}}>
                            <p>{title}</p>
                        </div>
                        <div style={{display: edit ? 'block' : 'none', flex: 1}}>
                            <Input size="100%"/>
                        </div>
                        <div className="circle __star"></div>
                        <div className="circle __edit"></div>
                        <div className="circle __cross"></div>
                    </div>
                </div>
                <div className="todo__complete">
                    <input type="checkbox"/>
                    <p>All tasks completed</p>
                </div>
            </div>
        </div>
    );
};