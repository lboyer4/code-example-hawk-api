import React from 'react';
import './Bird.css';

interface BirdProps {
	bird: any;
	name: string;
	id: number;
	gender: string;
	size: string;
	showDetails: (id: number) => void;
}

class Bird extends React.Component<BirdProps>{

	handleDetailsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		this.props.showDetails(this.props.id);
	}

	render() {
		const { name, size, gender } = this.props;

		return (
			<tr>
				<td className="name">{name}</td>
				<td className="size">{size}</td>
				<td className="gender">{gender}</td>
				<td className="view-details">
					<button onClick={this.handleDetailsClick} className="view-details-btn"> >
					</button>
				</td>
			</tr>
		)
	}
}

export default Bird;