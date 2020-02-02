import React from 'react';
import Bird from '../Bird/Bird';
import './Table.css';

interface TableProps {
	birds: any;
}

interface TableState {
	details: boolean;
	id: number;
	bird: any;
}

class Table extends React.Component<TableProps, TableState> {
	constructor(props: TableProps) {
		super(props);
		this.state = {
			details: false,
			id: 0,
			bird: null
		}
	}

	showDetails = (id: number, toggle: boolean) => {
		this.setState( { details: toggle })
		if (toggle === true) {
			this.setState({ id })
			this.findTheBird(id)
		} else {
			this.setState({ id: 0, bird: {}})
		}
	}

	findTheBird = (id: number) => {
		let bird = this.props.birds.find((bird: any) => bird.id === id) 
			this.setState({ bird })
		}

	render() {
		const displayBirds = this.props.birds.map((bird: any) => (
			<Bird {...bird} showDetails={this.showDetails} key={bird.id}/>))

		let asideView;
		
		if (this.state.details === true) {
			asideView = 
			<aside>
				<p>Name: {this.state.bird.name}</p>
			</aside>
		}

		return(
			<section className="table-details-section">
			<div className="table-container">
				<div className="table-header">
					<h3>Bird Log</h3>
					<input className="search-bar" placeholder="Search bird log..."/>
				</div>
				<table>
					<thead>
					<tr>
						<td className="table-label">Name</td>
						<td className="table-label">Size</td>
						<td className="table-label">Gender</td>
						<td className="table-label"> View Details </td>
					</tr>
					</thead>
					<tbody>
						{displayBirds}
					</tbody>
				</table>
			</div>
			{asideView}
			</section>
		)
	}
}

export default Table;