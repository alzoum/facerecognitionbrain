import './App.css';
import Navigation from '../Component/Navigation/navigation';
import Logo from '../Component/Logo/Logo';
import ParticlesBg from 'particles-bg'
import Image from '../Component/ImageFormLink/Image';
import Rank from '../Component/Rank/Rank';
function App() {
  return (
    <div>
      <Navigation />
      <Logo />
      <Rank />
      <ParticlesBg type="cobweb" bg={true} />
      <Image />
      {/* 
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
