import Input from "@/app/app-ui/input/input";
import './todo-search.scss'

const TodoSearch = () => {
    return (
        <div className="todo__head">
            <h2>Scheduler</h2>
            <Input placeholder="Search" size="150px"/>
        </div>
    );
};

export default TodoSearch;