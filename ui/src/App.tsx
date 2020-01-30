import React, {Component} from 'react';
import './App.css';
import Form from './Form/Form';
import Header from './Header/Header';



interface State {
	hawk: string;
	error: string;
	direction: string;
	}


class App extends React.Component {
	state = { 
		hawk: 'hawkone',
		error: '',
		direction: 'home'
	};

componentDidMount () {
	console.log('hello', this.state.hawk)
	fetch('http://localhost:8000/api/hawk/list')
		.then(response => response.json())
		.then(response => console.log('response', response))
		.catch(error => (console.log('error', error)))
}
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
