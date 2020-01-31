import React from 'react';
import './Form.css';

interface State {
	name: string;
	size: string;
	gender: string;
	colorDescription: string;
	behaviorDescription: string;
	habitatDescription: string;
}

// interface Props {
// 	addBird: (bird: object) => Array<object>;
// }



class Form extends React.Component {
	state = {
		name: '',
		size: '',
		gender: '',
		colorDescription: '',
		behaviorDescription: '',
		habitatDescription: ''
	}

	handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
    this.setState({[name]: value}) 
	}

	// handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	console.log('props')

	// }

	//handleSubmit function
	//posts to the backend 

	render() {
		return (
			<form>
				<div className="title-holder"> 
					<h2>Create Bird Sighting</h2>
				</div>
				<label>Name</label>
				<input
					type="text"
          onChange={this.handleChange}
          value={this.state.name}
          placeholder='Enter Name'
          name='name' />
				<label>Size</label>
				<select>
					<option value="SMALL">Small</option>
					<option value="MEDIUM">Medium</option>
					<option value="LARGE">Large</option>
				</select> 
				<label>Gender</label>
				<select>
					<option value="FEMALE">Female</option>
					<option value="MALE">Male</option>
				</select> 
				<label>Bird Color</label>
				<input 
					type="text"
          onChange={this.handleChange}
          value={this.state.colorDescription}
          placeholder='Enter Description'
          name='description'/> 
         <label>Bird Behavior</label>
				<input 
					type="text"
          onChange={this.handleChange}
          value={this.state.behaviorDescription}
          placeholder='Enter Description'
          name='description'/> 
        <label>Bird Habitat</label>
				<input 
					type="text"
          onChange={this.handleChange}
          value={this.state.habitatDescription}
          placeholder='Enter Description'
          name='description'/> 
				<button className="submit-btn">
					Save
				</button>
			</form>
			)
	}
}

export default Form;