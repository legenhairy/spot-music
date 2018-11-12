import React, { Component } from 'react';

class App extends Component {
  render() {
  	return (
  	  <div>	
  	    <div className="App-title">Spot Music</div>
  	    <div>
  	      <input placeholder="search an artist..." />
  	      <button>Search</button>
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