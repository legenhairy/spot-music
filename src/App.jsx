import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon }  from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: ''
    }
  }

  search() {
    console.log('this.state', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    
    console.log('BASE_URL', BASE_URL);
  }

  onSearchChange = (event) => {
    this.setState({searched: event.target.value});
  }

  render() {
  	return (
  	  <div className="App">	
  	    <div className="App-title">Spot Music</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an artist"
              value={this.state.searched}
              onChange = {this.onSearchChange}
              onKeyPress = {event => {
                if(event.key === 'Enter') {
                  this.search()
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
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