import React from 'react';

export default class NavBar extends React.Component {

	render() {
		return(
			<nav className="navbar navbar-back">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="#">WebSiteName</a>
			    </div>
			    <ul className="nav navbar-nav">
			      <li className="active"><a href="#">Home</a></li>
			      <li><a href="#">Link</a></li>
			      <li><a href="#">Link</a></li>
			    </ul>
		
			    <button className="btn btn-danger navbar-btn">Button</button>
			  </div>
			</nav>
		);
	}

}