import React from 'react';
import './App.css';
import Form from './Form/Form';
import Header from './Header/Header';
import Table from './Table/Table';

interface State {
	direction: string;
}

class App extends React.Component {
	state = { 
		direction: ''
	}

	updateView = (view: string) => {
		this.setState({ direction: view});
	}

	render() {
		let currentView; 
		let formView = <Form />
		let tableView = <Table />

		if (this.state.direction === "form" ) {
			currentView = formView;
		} else if (this.state.direction === "table") {
			currentView = tableView;
		} else {
			currentView = '';
		}

	  return (
	    <div>
	    	<Header updateView={this.updateView} />
	      <main className="landing-page">
	      	{currentView}
				</main> 	
			</div>    
	  )
	}
}


export default App;
