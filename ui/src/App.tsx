import React, {Component} from 'react';
import './App.css';
import  LandingPage  from './LandingPage/LandingPage';


interface State {
	hawk: string;
	error: string;
	}


class App extends React.Component {
	state = { 
		hawk: 'hawkone',
		error: ''
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
      <h1>hello world</h1>
      	<LandingPage />
		</div>    
  );
}
}


export default App;
