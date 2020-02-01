import React from 'react';
import './BirdDetails.css';

interface BirdProps {
	bird: any;
	name: string;
	id: number;
	gender: string;
	size: string;
}

class BirdDetails extends React.Component<BirdProps>{
	constructor(props: BirdProps){
		super(props);
	}
	render() {
		const { name, id, size, gender } = this.props
		
		return (
			<tr>
				<td>{name}</td>
				<td>{size}</td>
				<td>{gender}</td>
			</tr>
			)
	}
}

export default BirdDetails;