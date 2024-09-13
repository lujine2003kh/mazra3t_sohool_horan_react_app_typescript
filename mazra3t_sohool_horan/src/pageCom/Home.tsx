// Home.tsx
import React from 'react';
import '../style/home.css';
import why from '../media/why.svg';
import videoSrc from '../types/media/sohoolVid.mp4';
import VideoPlay from '../components/videoBlackBox';
import spec from '../media/spec.jpg';
const Home: React.FC = () => {
  return (
    <>
    <h1 className='welcome'>Welcome , Take a Tour</h1>
    <VideoPlay/>
    <img src={spec} className='spec'/>
    </>
  );
};

export default Home;
