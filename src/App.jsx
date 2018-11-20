import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon }  from 'react-bootstrap';
import Profile from './Profile';

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
    var accessToken = 'BQAAUINkaHjr3oTNByJ6Dr2ryrvA5e_VJN1ZzMQuk9lWJ0Fqb5zO9rDJZOf45sJAyeghbdHESauM-rTv7ZoCkIlCDM0CVWyZBbfSkVU5pvMTFq_9LQGNkm5Nm4JeD5NSTzR6u4fbpOlnV2fU3ir6rkktnAcaysIQu_agjARAbRfHOArtsyWuFkyt'
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
  	  	<Profile 
          artist={this.state.artist}
        />
  	  	<div className="gallery">
  	  	  Gallery	
  	  	</div>
  	  </div>
  	)

  }	
}

export default App;