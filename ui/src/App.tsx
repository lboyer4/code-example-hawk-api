import React from 'react';
import './App.css';
import Form from './Form/Form';
import Header from './Header/Header';

interface State {
	error: string;
	direction: string;
	hawks: []
	}


class App extends React.Component {
	state = { 
		error: '',
		direction: 'form',
		birds: []
	};

componentDidMount () {
	fetch("http://localhost:8000/api/hawk/list", {
		method: "GET",
	})
	.then(response => response.json())
	.then(response => console.log('response is here', response))
		.catch(error => (console.log('error', error)))
}

// addBird = (bird: object) => {
// 	const newBird = bird;
// 	const birds = [...this.state.birds, newBird]
// 	this.setState({ birds })
// }

updateView = (view: string) => {
 this.setState({ direction: view})
}

render() {
let currentView; 
let formView = <Form />
	//conditionally render form if direction is 'form'
	//conditionally render table if direction is 'table'
	//conditionally render home page if direction is 'home'

	if (this.state.direction === "form" ) {
		currentView = formView
	} else if (this.state.direction === "home") {
		let currentView = ''
	}

  return (
    <div>
    		<Header updateView={this.updateView} />
      	<main className="landing-page">
      		{currentView}
				</main>
      	
		</div>    
  );
}
}


export default App;
