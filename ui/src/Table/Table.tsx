import React from 'react';
import BirdDetails from '../BirdDetails/BirdDetails';
import './Table.css';

interface TableProps {
	birds: any;
}

class Table extends React.Component<TableProps> {

	render() {
		console.log('here are birds', this.props.birds)
		const displayBirds = this.props.birds.map((bird: any) => (
			<BirdDetails {...bird} key={bird.id}/>))

		return(
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
		)
	}
}

export default Table;