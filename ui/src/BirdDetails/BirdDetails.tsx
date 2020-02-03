import React from 'react';
import './BirdDetails.css';

interface BirdDetailProps {
	id: number;
	name: string;
	gender: string;
	size: string;
	wingspanBegin: number;
	wingspanEnd: number;
	weightBegin: number;
	weightEnd: number;
	lengthBegin: number;
	lengthEnd: number;
	colorDescription: string;
	behaviorDescription: string;
	habitatDescription: string;
	pictureUrl: string;
}

export const BirdDetails: React.FC<BirdDetailProps> = (props: BirdDetailProps) => {
	return (
		<aside>
		<h3>{props.name}</h3>
		<h4>Size:</h4><h5>{props.size}</h5>
		<h4>Gender:</h4><h5>{props.gender}</h5>
		<h4>Color:</h4><h5>{props.colorDescription}</h5>
		<h4>Habitat:</h4><h5>{props.habitatDescription}</h5>
		<h4>Behavior:</h4><h5>{props.behaviorDescription}</h5>
	</aside>
	)
}