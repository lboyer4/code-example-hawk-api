import React from 'react';
import './BirdDetails.css';

interface BirdDetailProps {
	id: number;
	name: string;
}

export const BirdDetails: React.FC<BirdDetailProps> = (props: BirdDetailProps) => {
console.log('props in details', props.name)
	return (
		<aside>
		<h1>{props.name}</h1>
	</aside>
	)
}
	
	
