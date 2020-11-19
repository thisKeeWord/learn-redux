import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "./TodoList";

const getVisibleTodos = (todos: any, filter: any) => {
	switch (filter) {
		case "SHOW_ALL":
			return todos;
		case "SHOW_COMPLETED":
			return todos.filter((t: any) => t.completed);
		case "SHOW_ACTIVE":
			return todos.filter((t: any) => !t.completed);
		default:
			throw new Error(`Unknown filter: ${filter}.`);
	}
};

const mapStateToProps = (state: any) => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter),
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		onTodoClick: (id: any) => {
			dispatch(toggleTodo(id));
		},
	};
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
