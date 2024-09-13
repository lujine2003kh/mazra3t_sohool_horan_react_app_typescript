import React from 'react';
import videoSorc from "../media/مسبح.mp4";
import '../style/vidSwim.css';
interface VideoProps {
    autoplay?: true;
    loop?: boolean;
    controls?:boolean;
    src?: string;
  }
  
  const VideoPlay: React.FC<VideoProps> = ({
    src = videoSorc,
    autoplay = true,
    loop = true,
    controls = true,
  }) => {
    return (
        <>
         <video
         className='vidSwim'
      src={src}
        autoPlay={autoplay}
        loop={loop}
        controls={controls}

      />
     
     </>
     
      
    );
  };
export default VideoPlay;
