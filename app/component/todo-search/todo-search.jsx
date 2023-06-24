import Input from "@/app/app-ui/input/input";
import './todo-search.scss'
import PropTypes from "prop-types";

const TodoSearch = ( { onFind } ) => {
    return (
        <div className="todo__head">
            <h2>Scheduler</h2>
            <Input placeholder="Search" size="150px" callback={onFind}/>
        </div>
    );
};

TodoSearch.propTypes = {
    onFind: PropTypes.func,
}

export default TodoSearch;