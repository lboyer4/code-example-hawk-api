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
	constructor(props: BirdProps){
		super(props);
	}

	handleDetailsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		this.props.showDetails(this.props.id);
	}

	render() {
		const { name, size, gender } = this.props;

		return (
			<tr>
				<td>{name}</td>
				<td>{size}</td>
				<td>{gender}</td>
				<td>
					<button onClick={this.handleDetailsClick} className="view-details-btn"> >
					</button>
				</td>
			</tr>
		)
	}
}

export default Bird;