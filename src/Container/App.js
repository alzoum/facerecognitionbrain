import './App.css';
import Navigation from '../Component/Navigation/navigation';
import Logo from '../Component/Logo/Logo';
import FaceRecognition from '../Component/FaceRecognition/faceRecognition';
import ParticlesBg from 'particles-bg'
import Image from '../Component/ImageFormLink/Image';
import Rank from '../Component/Rank/Rank';
import SignIn from '../Component/signin/signIn';
import { Component } from 'react';

const PAT = 'bed65abb53684b03911c673ab35f7e12';
const USER_ID = 'abdullahmoh';
const APP_ID = 'Test';
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105'

const setupClarifai = (imageUrl) => {
  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": USER_ID,
      "app_id": APP_ID
    },
    "inputs": [
      {
        "data": {
          "image": {
            "url": imageUrl
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
      input: "",
      imageUrl: "",
      box: {},
      route: "home",
      isSignedIn: false
    }
    this.onImageLoad = this.onImageLoad.bind(this);
  }

  oninputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    this.setState({ box: {} });
  }

  onImageLoad = () => {
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", setupClarifai(this.state.input))
      .then(response => response.json())
      .then(response => {
        if (response && response.outputs) {
          const faceData = this.calculateFaceLocation(response);
          this.displayFaceBox(faceData);
        }
      })
      .catch(error => console.log('error', error));
  }

  calculateFaceLocation = (date) => {
    const clarifaiFace = date.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box: box })
  }

  render() {
    return (
      <div>
        <Navigation />
        <SignIn />
        <Logo />
        <Rank />
        <ParticlesBg type="cobweb" bg={true} />
        <Image oninputChange={this.oninputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box} onImageLoad={this.onImageLoad} />
      </div>
    )
  }


}

export default App;
