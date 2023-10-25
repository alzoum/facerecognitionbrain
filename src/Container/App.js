import './App.css';
import Navigation from '../Component/Navigation/navigation';
import Logo from '../Component/Logo/Logo';
import imageLinkForm from '../Component/ImageLinkForm/imagelinkform';
import ParticlesBg from 'particles-bg'
function App() {
  return (
    <div>
      <Navigation />
      <Logo />
      <imageLinkForm />
      <ParticlesBg type="cobweb" bg={true} />
      {/* 
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
