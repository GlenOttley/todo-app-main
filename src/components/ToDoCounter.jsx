import React from 'react';

function ToDoCounter({ toDos, clearCompleted }) {
	let completedToDos = toDos.filter(toDo => !toDo.complete)
	return (
		<div className="to-do-counter">
			<p>{completedToDos.length} items left</p>
			<p
			className="clear-completed"
			onClick={clearCompleted}>
			Clear Completed</p>
		</div>
	)
}

export default ToDoCounter