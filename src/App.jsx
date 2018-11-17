import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
  	return (
  	  <div className="App">	
  	    <div className="App-title">Spot Music</div>
  	    <div>
  	      <input placeholder="search an artist..." />
  	      <button>Submit</button>
  	    </div>
  	  	<div className="Profile">
  	  	  <div>Artist Picture</div>
  	  	  <div>Artist Name</div>	
  	  	</div>
  	  	<div className="gallery">
  	  	  Gallery	
  	  	</div>
  	  </div>
  	)

  }	
}

export default App;