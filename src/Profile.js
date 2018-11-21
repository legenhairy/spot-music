import React, { Component } from 'react';
import './App.css';

class Profile extends Component{
  render() {
  	let artist = {name:'', followers: {total: ''}};
  	if (this.props.artist !== null) {
  	  artist = this.props.artist;	
  	}

  	return (
  	  <div className="profile">
  	  	<div className="name">{artist.name}</div>	
  	  	<div className="followers">{artist.followers.total}</div>
  	  </div>
  	)
  }
}

export default Profile;