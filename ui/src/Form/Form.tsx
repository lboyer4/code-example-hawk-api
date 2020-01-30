import React from 'react';
import './Form.css';

class Form extends React.Component {
	render() {
		return (
			<form>
				<h2>Create Bird Sighting</h2>
				<label>Name</label>
				<input />
				<label>Size</label>
				<input />
				<label>Gender</label>
				<input />
				<label>Description</label>
				<input /> 
			</form>
			)
	}
}

export default Form;