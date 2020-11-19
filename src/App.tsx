import React from "react";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import VisibleTodoList from "./components/VisibleTodoList";

const App = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
);

export default App;
