import React, { Component } from 'react';
import Particles from 'react-particles-js';

import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';


const app = new Clarifai.App({
  apikey: 'a51bdf06e1a04126aec966b5f09e7b84'
});



const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value);
  }
  onButtonSubmit = () => {
    console.log('click');
      app.models
      .predict(
      Clarifai.COLOR_MODEL,
          // URL
          "https://samples.clarifai.com/metro-north.jpg"
      )
      .then(function(response) {
          // do something with responseconsole.log(response);
          },
          function(err) {
          }
      );
  }
  render() {
    return (
      <div className="App">
            <Particles
              className='particles' 
              params={particlesOptions}
            />      
       <Navigation />
       <Logo />
       <Rank />
        
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        { /*
        <FaceRecognition />*/}

      </div>
    );
  }
}

export default App;
