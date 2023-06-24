import Input from "@/app/app-ui/input/input";
import Button from "@/app/app-ui/button/button";
import './todo-form.scss'
import {useState} from "react";
import PropTypes from "prop-types";

const TodoForm = ( { onCreate } ) => {
    const [todo, setTodo] = useState({
        title: '',
        isCompleted: false,
    });
     const createTodo = e => {
        setTodo({title: e.target.value, isCompleted: false});
    }
    const onSubmit = e => {
        e.preventDefault();
        onCreate(todo);
    }

    return (
        <div className="todo__input">
            <form action="" style={{display: "flex", justifyContent: "space-between", width: '100%'}}>
                <Input size="550px" placeholder="Text" callback={createTodo} />
                <Button title="Add task" callback={onSubmit} />
            </form>
        </div>
    );
};

TodoForm.propTypes = {
    onCreate: PropTypes.func,
}

export default TodoForm;