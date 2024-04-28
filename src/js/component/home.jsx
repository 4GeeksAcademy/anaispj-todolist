import React from "react";
import { TodoList } from "./TodoList";



//create your first component
const Home = () => {
	return (
		<div className="text-center mt-4">
			<TodoList />

		</div>
	);
};

export default Home;
