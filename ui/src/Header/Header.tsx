import React from 'react';
import './Header.css';

interface HeaderProps {
      updateView: (view: string) => void;
}

interface HeaderState {
      view: any;
}

class Header extends React.Component<HeaderProps, HeaderState> {
      constructor(props: HeaderProps){
            super(props);
            this.state = {
                  view: ''
            }
      }

      handleView = (e: React.MouseEvent<HTMLButtonElement>) => {
            console.log('hello', e.currentTarget.getAttribute('value'))

            let newView = e.currentTarget.getAttribute('value')
            console.log()
           this.setState({ view: e.currentTarget.getAttribute('value')})
            
            console.log('where is this?', this.state.view)
            this.props.updateView(this.state.view)
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