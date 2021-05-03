import { useEffect, useState } from 'react';
import ToDoData from "./data/data.json";
import Header from "./components/Header.jsx";
import EntryBox from "./components/EntryBox.jsx";
import ToDoItem from "./components/ToDoItem.jsx";
import ToDoCounter from "./components/ToDoCounter.jsx";
import ToDoFilter from "./components/ToDoFilter.jsx";

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/theme';
import { GlobalStyles } from './components/global'; 


function App() {
	const [toDos, setToDos] = useState([]);
	const [filter, setFilter] = useState('all');
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		setToDos(ToDoData)
	}, [])

	function toggleTheme() {
		theme === 'light'
		? setTheme('dark')
		: setTheme('light')
	}

	function addToDo(e) {
		if (e.key === 'Enter') {
			let id = toDos[toDos.length -1].id + 1
			setToDos([...toDos, {
				"id": id, 
				"complete": false, 
				"description": e.target.value 
			}])
			e.target.value = ""
		}
	}

	function completeToDo({ target }) {
		let id = Number(target.parentNode.parentNode.id)
		setToDos((prevToDos) =>
      prevToDos.map((toDo) => {
        return toDo.id === id ? { ...toDo, complete: !toDo.complete } : toDo;
      }),
    );
	}

	function deleteToDo({target}) {
		let id = Number(target.parentNode.id)
		setToDos(toDos.filter(toDo => toDo.id !== id))
	}

	function clearCompleted() {
		setToDos(toDos.filter(toDo => !toDo.complete))
	}

	function filterToDos({target}) {
		target.innerHTML === "Active" 
		? setFilter('active')
		: target.innerHTML === "Completed"
		? setFilter('completed')
		: setFilter('all')
	}

  return (
  	<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
	    <div className="app">
	    	<GlobalStyles />
	      <Header
	      toggleTheme={toggleTheme} 
	      theme={theme} />

	      <EntryBox 
	      addToDo={addToDo} />

	      <div className="to-dos container">
	      	{ filter === "active" ? toDos.filter(toDo => !toDo.complete).map(toDo => 
	      		<ToDoItem
	    			toDo={toDo}
	    			completeToDo={completeToDo}
	    			deleteToDo={deleteToDo}
	    			key={toDo.id} />
	    			)

	  			: filter === "completed" ? toDos.filter(toDo => toDo.complete).map(toDo => 
	    			<ToDoItem 
	    			toDo={toDo}
	    			completeToDo={completeToDo}
	    			deleteToDo={deleteToDo}
	    			key={toDo.id} />
	    			)

	    		: toDos.map(toDo => 
	    			<ToDoItem 
	    			toDo={toDo}
	    			completeToDo={completeToDo}
	    			deleteToDo={deleteToDo}
	    			key={toDo.id} />
	    			)
	    		}

	    		<ToDoCounter 
	    		toDos={toDos}
	    		clearCompleted={clearCompleted} />
	      </div>

	      <ToDoFilter 
	      filterToDos={filterToDos}
	      filter={filter} />
	    </div>
	  </ThemeProvider>
  );
}

export default App;
