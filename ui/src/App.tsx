import React, {Component} from 'react';
import './App.css';
import  LandingPage  from './LandingPage/LandingPage';
import Form from './Form/Form';



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

  return (
    <div>
    	<header>
      	<h1>Hawk<span className="eye">Eye</span></h1>
      	<div className="btn-holder">
      		<button className="add-bird-btn">Add A Bird</button>
      		<span className="divide"> | </span>
      		<button className="view-birds-btn"> View Birds</button>
      	</div>
      </header>
      	<Form /> 
      	<LandingPage />
		</div>    
  );
}
}


export default App;
