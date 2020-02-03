import React from 'react';
import Bird from '../Bird/Bird';
import { BirdDetails } from '../BirdDetails/BirdDetails';
import './Table.css';


interface State {
	id: number;
	bird: any;
	birds: [];
	error: string;
	filter: string;
}

class Table extends React.Component {
	state = {
		id: 0,
		bird: {	id: 0,
		name: '',
		gender: '',
		size: '',
		wingspanBegin: 0,
		wingspanEnd: 0,
		weightBegin: 0,
		weightEnd: 0,
		lengthBegin: 0,
		lengthEnd: 0,
		colorDescription: '',
		behaviorDescription: '',
		habitatDescription: '',
		pictureUrl: ''},
		birds: [],
		error: '',
		filter: ''
	}

	componentDidMount () {
		this.fetchAllBirds()
	}

	fetchAllBirds = () => {
		fetch("http://localhost:8000/api/hawk/list")
		.then(response => response.json())
		.then(response => this.setState({ birds: response.hawks}))
		.catch(error => (this.setState({ error })))
	}

	showDetails = (id: number) => {
		this.findTheBird(id);
	}

	findTheBird = (id: number) => {
		let bird = this.state.birds.find((bird: any) => bird.id === id) 
		this.setState( { id });
		this.setState({ bird });
	}

	filterBirds = (e: React.ChangeEvent<HTMLInputElement>) => {
		let input = e.target.value
		if (input === '') {
			this.fetchAllBirds();
		} else {
			let matched = this.state.birds.filter((bird: any) => {
				return bird.name.toLowerCase().includes(input.toLowerCase())
			})
			this.setState({ birds: matched })
		}
		this.setState({ filter: input })
	}

	render() {
		const displayBirds = this.state.birds.map((bird: any) => (
			<Bird {...bird} showDetails={this.showDetails} key={bird.id}/>));

		let asideView;
		let currentBird;
		if (this.state.id > 0) {
			currentBird = this.state.bird;
			asideView = <BirdDetails {...currentBird} />
		}

		let noBirdMessage;

		if (!this.state.birds.length) {
			noBirdMessage = "You have no birds saved yet"
		}

		return (
			<section className="table-details-section">
				<div className="table-container">
					<div className="table-header">
						<h3>Bird Log</h3>
						<input 
							className="search-bar" 
							placeholder="Search birds..."
							value={this.state.filter}
							onChange={this.filterBirds}/>
					</div>
					<table>
						<thead>
						<tr className="table-headers">
							<th className="table-label name">Name</th>
							<th className="table-label size">Size</th>
							<th className="table-label gender">Gender</th>
							<th className="table-label view-details"> Learn More </th>
						</tr>
						</thead>
						<tbody>
							{displayBirds}
						</tbody>
					</table>
					{noBirdMessage}
				</div>
				{asideView}
			</section>
		)
	}
}

export default Table;