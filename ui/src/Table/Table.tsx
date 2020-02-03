import React from 'react';
import Bird from '../Bird/Bird';
import { BirdDetails } from '../BirdDetails/BirdDetails';
import './Table.css';

interface TableProps {
	birds: any;
}

interface TableState {
	id: number;
	bird: any;
}

class Table extends React.Component<TableProps, TableState> {
	constructor(props: TableProps) {
		super(props);
		this.state = {
			id: 0,
			bird: null
		}
	}

	showDetails = (id: number) => {
		this.findTheBird(id)
	}

	findTheBird = (id: number) => {
		let bird = this.props.birds.find((bird: any) => bird.id === id) 
			this.setState( { id })
			this.setState({ bird })
		}

	render() {
		const displayBirds = this.props.birds.map((bird: any) => (
			<Bird {...bird} showDetails={this.showDetails} key={bird.id}/>))

		let asideView;
		let currentBird;
		
		if (this.state.id > 0) {
			currentBird = this.state.bird
			asideView = <BirdDetails {...currentBird} />
			}
		
		return (
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