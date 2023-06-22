import Input from "@/app/app-ui/input/input";
import Button from "@/app/app-ui/button/button";
import './todo-form.scss'

const TodoForm = ( { inputAddTodoValue, setInputAddTodoValue, callback } ) => {
    const inputAddTodoHandler = e => {
        e.preventDefault();
        setInputAddTodoValue(e.target.value);
    }

    return (
        <div className="todo__input">
            <form action="" style={{display: "flex", justifyContent: "space-between", width: '100%'}}>
                <Input size="550px" placeholder="Text" callback={inputAddTodoHandler} inputValue={inputAddTodoValue} setInputValue={setInputAddTodoValue} />
                <Button title="Add task" callback={callback} />
            </form>
        </div>
    );
};

export default TodoForm;