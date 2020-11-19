import React, { FunctionComponent } from "react";
import Todo from "./Todo";

const TodoList: FunctionComponent = ({ todos, onTodoClick }: any) => (
	<ul>
		{todos.map((todo: any) => (
			<Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
		))}
	</ul>
);

export default TodoList;
