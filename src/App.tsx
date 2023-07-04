import './App.css';
import { Card } from './components';

import QRImg from './assets/image-qr-code.png'

function App() {
  return (
    <div className="bg-light_gray h-screen flex items-center justify-center">
      <div className="container w-[300px]">
        <Card
          imgSrc={QRImg}
          title="Improve your front-end skills by building projects"
          description="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
        />
      </div>
    </div>
  );
}

export default App;
