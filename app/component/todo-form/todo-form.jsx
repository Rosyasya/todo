import Input from "@/app/app-ui/input/input";
import Button from "@/app/app-ui/button/button";
import './todo-form.scss'
import {useState} from "react";

const TodoForm = ( { onCreate } ) => {
    const [value, setValue] = useState('');
    const [todo, setTodo] = useState({
        title: '',
        isCompleted: false,
    });
    const createTodo = e => {
        setValue(e.target.value)
        setTodo({title: value, isCompleted: false});
    }

    const onSubmit = e => {
        e.preventDefault();
        onCreate(todo);
        setValue('');
    }

    return (
        <div className="todo__input">
            <form action="" style={{display: "flex", justifyContent: "space-between", width: '100%'}}>
                <Input size="550px" placeholder="Text" callback={createTodo} value={value} />
                <Button isDisabled={value === ''} title="Add task" callback={onSubmit} />
            </form>
        </div>
    );
};

export default TodoForm;