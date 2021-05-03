import React from 'react';

function EntryBox({ addToDo, display }) {
	return (
		<div className="entry-box container">
			<input 
			className={display === "light" ? "entry-box__input" : "entry-box__input entry-box__input--dark" } 
			type="text"
			placeholder="Create a new todo..."
			onKeyDown={addToDo}
			/> 
		</div>
	)
}

export default EntryBox