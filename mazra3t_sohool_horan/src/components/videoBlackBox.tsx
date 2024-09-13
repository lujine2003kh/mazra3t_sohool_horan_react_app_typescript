import React from 'react';
import videoSrc from "../media/sohoolVid.mp4";
import '../style/videoBlackBox.css';
interface VideoProps {
    autoplay?: true;
    loop?: boolean;
    controls?: boolean;
    src?: string;
  }
  
  const VideoPlay: React.FC<VideoProps> = ({
    src = videoSrc,
    autoplay = true,
    loop = true,
    controls = true,
  }) => {
    return (
        <>
         <video
         className='vid'
      src={src}
        autoPlay={autoplay}
        loop={loop}
        controls={controls}

      />
     
     </>
     
      
    );
  };
export default VideoPlay;
