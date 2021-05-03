import React from 'react';
import crossIcon from '../images/icon-cross.svg';
import checkIcon from '../images/icon-check.svg';

function ToDoItem({ toDo, deleteToDo, completeToDo, display }) {
	return (
		<div 
		className="to-do-item"
		id={toDo.id}
		>
			<div className="flex">
				<div 
				className="checkbox"
				onClick={completeToDo}
				style={ toDo.complete 
					? {backgroundImage: `url(${checkIcon}), var(--check-background)`}
					: {} }
					>
				</div>
				<p
				className={toDo.complete ? "to-do-item__description--complete" : "to-do-item__description"}
				onClick={completeToDo}>
				{toDo.description}
				</p>
			</div>
			<img
			src={crossIcon}
			className="to-do-item__cross"
			alt="delete to do item" 
			onClick={deleteToDo}
			/>
		</div>
	)
}

export default ToDoItem