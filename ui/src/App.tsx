import React from 'react';
import './App.css';
import Form from './Form/Form';
import Header from './Header/Header';
import Table from './Table/Table';

interface State {
	error: string;
	direction: string;
	hawks: []
	}


class App extends React.Component {
	state = { 
		error: '',
		direction: '',
		birds: [{
			id: 1,
			name: "hawk",
			gender: "MALE",
			size: "SMALL",
			wingspanBegin: 0,
			wingspanEnd: 0,
			weightBegin: 0,
			weightEnd: 0,
			lengthBegin: 0,
			lengthEnd: 0,
			colorDescription: "yellow",
			behaviorDescription: "bold",
			habitatDescription: "outside",
			pictureUrl: "url.blah"
			}]
	};

componentDidMount () {
	fetch("http://localhost:8000/api/hawk/list")
	.then(response => response.json())
	.then(response => this.setState({ birds: response.hawks}))
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
let tableView = <Table birds={this.state.birds}/>

	if (this.state.direction === "form" ) {
		currentView = formView
	} else if (this.state.direction === "table") {
		currentView = tableView
	} else {
		currentView = ''
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
