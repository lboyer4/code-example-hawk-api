import React from 'react';
import './Form.css';

class Form extends React.Component {
	render() {
		return (
			<form>
				<div className="title-holder"> 
					<h2>Create Bird Sighting</h2>
				</div>
				<label>Name</label>
				<input />
				<label>Size</label>
				<input />
				<label>Gender</label>
				<input />
				<label>Description</label>
				<input /> 
				<button className="submit-btn">Save</button>
			</form>
			)
	}
}

export default Form;