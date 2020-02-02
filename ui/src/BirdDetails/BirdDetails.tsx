import React from 'react';
import './BirdDetails.css';

interface BirdProps {
	bird: any;
	name: string;
	id: number;
	gender: string;
	size: string;
	showDetails: (id: number, toggle: boolean) => void;
}

interface BirdState {
	viewDetails: boolean;
}

class BirdDetails extends React.Component<BirdProps, BirdState>{
	constructor(props: BirdProps){
		super(props);
		this.state = {
			viewDetails: false
		}
	}

	handleDetailsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		let toggle = !this.state.viewDetails
		this.setState( {viewDetails: toggle})
		this.props.showDetails(this.props.id, toggle)
	}

	render() {
		const { name, id, size, gender } = this.props
		
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

export default BirdDetails;