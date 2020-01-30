import React from 'react';
import './Form.css';

interface State {
	name: string;
	size: string;
	gender: string;
	description: string;
}
class Form extends React.Component {
	state = {
		name: '',
		size: '',
		gender: '',
		description: '',
	}

	handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
    this.setState({[name]: value}) 
	}
	//handleChange function
	//handles the change of an input

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
				<input 
					type="text"
          onChange={this.handleChange}
          value={this.state.size}
          placeholder='Enter Size'
          name='size'/>
				<label>Gender</label>
				<input 
					type="text"
          onChange={this.handleChange}
          value={this.state.gender}
          placeholder='Enter Gender'
          name='gender'/>
				<label>Description</label>
				<input 
					type="text"
          onChange={this.handleChange}
          value={this.state.description}
          placeholder='Enter Description'
          name='description'/> 
				<button className="submit-btn">Save</button>
			</form>
			)
	}
}

export default Form;