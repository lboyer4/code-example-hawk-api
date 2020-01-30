import React from 'react';
import './Header.css';

class Header extends React.Component {
	render() {
		return (
			<header>
      	<h1>Hawk<span className="eye">Eye</span></h1>
      	<div className="btn-holder">
      		<button className="add-bird-btn">Add A Bird</button>
      		<span className="divide"> | </span>
      		<button className="view-birds-btn"> View Birds</button>
      	</div>
      </header>
		)
	}
}

export default Header;