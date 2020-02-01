import React from 'react';
import './Form.css';

interface State {
	name: string;
	size: string;
	gender: string;
	colorDescription: string;
	behaviorDescription: string;
	habitatDescription: string;
	confirmMessage: string;
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
		habitatDescription: '',
		confirmMessage: ''
	}

	handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
    this.setState({[name]: value}) 
	}

	handleDropDown = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;
    this.setState({[name]: value})
	}

	// handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	console.log('props')

	// }

	//handleSubmit function
	//posts to the backend 

	handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(this.state)
	// 	let postCall = {
 //            "in": "body",
 //            "name": "special",
 //            "description": "hawk",
 //            "gender": "MALE",
 //            "size": "SMALL",
 //            "colorDescription": "yellowish gold",
 //            "behaviorDescription": "bold",
 //            "habitatDescription": "outside",
 //            "pictureUrl": "url.blah"
            
 //          }

	// fetch("http://localhost:8000/api/hawk", {
	//   method: "POST",
	//   headers: {
	//     'Content-Type': 'application/json',
	//   },
	//   body: JSON.stringify(postCall)
	// 	})
	// .then( (response) => { 
 //   console.log('response', response)
	// });
	}

	render() {
		return (
			<form
				onSubmit={this.handleSubmit}>
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
				<select
					name='size'
					onChange={this.handleDropDown}>
					<option value="">Pick A Size</option>
					<option value="SMALL">Small</option>
					<option value="MEDIUM">Medium</option>
					<option value="LARGE">Large</option>
				</select> 
				<label>Gender</label>
				<select
					name='gender'
					onChange={this.handleDropDown}>
					<option value="">Pick A Gender</option>
					<option value="FEMALE">Female</option>
					<option value="MALE">Male</option>
				</select> 
				<label>Bird Color</label>
				<input 
					type="text"
          onChange={this.handleChange}
          value={this.state.colorDescription}
          placeholder='Enter Description'
          name='colorDescription'/> 
         <label>Bird Behavior</label>
				<input 
					type="text"
          onChange={this.handleChange}
          value={this.state.behaviorDescription}
          placeholder='Enter Description'
          name='behaviorDescription'/> 
        <label>Bird Habitat</label>
				<input 
					type="text"
          onChange={this.handleChange}
          value={this.state.habitatDescription}
          placeholder='Enter Description'
          name='habitatDescription'/> 
				<button className="submit-btn">
					Save
				</button>
			</form>
			)
	}
}

export default Form;