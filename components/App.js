import React from 'react';
// import Header from './Header'
// import Footer from './Footer'
import NavBar from './NavBar';
import Container from './Container';

//import '../css/footer.css';

class App extends React.Component {

	// constructor(props) {
	// 	super(props);

	// 	this.state = { name: 'Rajesh', age : 21}
	// 	this.handleState = this.handleState.bind(this);

	// }
	// handleState(event) {
	// 	this.setState({name : event.target.value, age : event.target.value})   
	// }
   render() {
      return (
         <div>
          <NavBar />
          <Container />
         </div>
      );
   }
}

export default App;