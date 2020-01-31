import React from 'react';
import './Header.css';

class Header extends React.Component {

      handleView = (e: React.MouseEvent<HTMLButtonElement>) => {
            
            console.log('hello', e.currentTarget.getAttribute('value'))
      }

	render() {
		return (
	        <header>
      	    <h1>Hawk<span className="eye">Eye</span></h1>
      	    <div className="btn-holder">
      		<button 
                        onClick={this.handleView}
                        value="form" 
                        className="add-bird-btn">
                        Add A Bird
                  </button>
      		<span className="divide"> | </span>
      		<button 
                        onClick={this.handleView}
                        value="table" 
                        className="view-birds-btn"> 
                        View Birds
                   </button>
      	</div>
      </header>
		)
	}
}

export default Header;