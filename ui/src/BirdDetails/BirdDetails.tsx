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
		<div className="detail-card">
		<h3 className="details-header">{props.name}</h3>
		<h5>
			<span className="description-word">
				Size: </span>
			{props.size}
		</h5>
		<h5>
			<span className="description-word">Gender: 	</span>
			{props.gender}
		</h5>
		<h5>
			<span className="description-word">Color: </span>
			{props.colorDescription}
		</h5>
		<h5>
			<span className="description-word">
				Habitat: </span>
			 {props.habitatDescription}
		</h5>
		<h5>
			<span className="description-word">Behavior: </span>
			 {props.behaviorDescription}
		</h5>
	</div>
	)
}