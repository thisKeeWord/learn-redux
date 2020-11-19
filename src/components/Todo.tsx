import React, { FunctionComponent } from "react";

const Todo: FunctionComponent = ({ onClick, completed, text }: any) => (
	<li
		onClick={onClick}
		style={{
			textDecoration: completed ? "line-through" : "none",
		}}
	>
		{text}
	</li>
);

export default Todo;
