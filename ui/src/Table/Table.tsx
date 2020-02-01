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
			<div>
				<table>
					<thead>
					<tr>
						<td>Name</td>
						<td>Size</td>
						<td>Gender</td>
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