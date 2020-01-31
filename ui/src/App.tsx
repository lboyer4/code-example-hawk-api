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
		direction: 'home',
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
render() {

	//conditionally render form if direction is 'form'
	//conditionally render table if direction is 'table'
	//conditionally render home page if direction is 'home'


  return (
    <div>
    		<Header />
      	<main className="landing-page">
      		<Form />
				</main>
      	
		</div>    
  );
}
}


export default App;
