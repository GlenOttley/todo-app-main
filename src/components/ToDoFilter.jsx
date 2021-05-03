import React from 'react';

function ToDoFilter({ filterToDos, filter }) {
	return (
		<div className="to-do-filter container">
			<div className="to-do-filter__items flex">
				<p 
				className={filter === 'all' ? "to-do-filter__items--clicked" : null}
				onClick={filterToDos}
				>
				All</p>
				<p 
				className={filter === 'active' ? "to-do-filter__items--clicked" : null}
				onClick={filterToDos}>Active</p>
				<p 
				className={filter === 'completed' ? "to-do-filter__items--clicked" : null}
				onClick={filterToDos}>Completed</p>
			</div>
		</div>
	)
}

export default ToDoFilter