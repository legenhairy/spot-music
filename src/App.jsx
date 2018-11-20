import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon }  from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: '',
      artist: null
    }
  }

  search() {
    console.log('this.state', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = BASE_URL + 'q=' + this.state.searched
                      + '&type=artist&limit=1'; 
    var accessToken = 'BQCfi1DKNKzWxfUXTywJLt3_LMtmmPlMhwgbvAJQgbPNUCo2ZKqqfzeA4BnYQfEbqDNfxCRsWf4gHKCfALwr0CYtg7R15zmhXSgaiAJBoulai3d6tG9Z3Mvn4Iw-eOAzH2ewZuDMjnNLBPbZYGqc-dmA47cJIy_WUH-eOfzXjxvPzRvhbVdqPa8a'
    var myHeaders = new Headers();
    
    var myOptions = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      },
      mode: 'cors',
      cache: 'default'
    };

    fetch(FETCH_URL, myOptions)
      .then(response => response.json())
      .then(json => {
        const artist = json.artists.items[0];
        console.log('artist', artist);
        this.setState({artist});
      })
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