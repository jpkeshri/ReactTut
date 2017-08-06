import React from 'react';
import Header from './Header'
import Footer from './Footer'

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = { name: 'Rajesh', age : 21}
		this.handleState = this.handleState.bind(this);

	}
	handleState(event) {
		this.setState({name : event.target.value, age : event.target.value})   
	}
   render() {
      return (
         <div>
         	<Header />
           <h1>This is  state {this.state.name}</h1> 
           <input onChange={this.handleState.bind(this)}></input>
            <Footer data ={this.state}/>
         </div>
      );
   }
}

export default App;