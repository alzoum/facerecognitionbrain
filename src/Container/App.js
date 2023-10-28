import './App.css';
import Navigation from '../Component/Navigation/navigation';
import Logo from '../Component/Logo/Logo';
import FaceRecognition from '../Component/FaceRecognition/faceRecognition';
import ParticlesBg from 'particles-bg'
import Image from '../Component/ImageFormLink/Image';
import Rank from '../Component/Rank/Rank';
import { Component } from 'react';
import image from '../Component/ImageFormLink/Image';


const setupClarifai = (imageUrl) => {
  const PAT = 'bed65abb53684b03911c673ab35f7e12';
  const USER_ID = 'abdullahmoh';
  const APP_ID = 'Test';
  // Change these to whatever model and image URL you want to use
  const MODEL_ID = 'face-detection';
  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": USER_ID,
      "app_id": APP_ID
    },
    "inputs": [
      {
        "data": {
          "image": {
            "url": IMAGE_URL
          }
        }
      }
    ]
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + PAT
    },
    body: raw
  };

  return requestOptions;
}



class App extends Component {
  constructor() {
    super()
    this.state = {
      input: " ",
      imageUrl: " "
    }
  }

  oninputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    fetch("https://api.clarifai.com/v2/models/" + "face-detection" + "/outputs", setupClarifai)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div>
        <Navigation />
        <Logo />
        <Rank />
        <ParticlesBg type="cobweb" bg={true} />
        <Image oninputChange={this.oninputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    )
  }


}

export default App;
