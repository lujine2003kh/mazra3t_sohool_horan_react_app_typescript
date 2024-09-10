import React from 'react';
import videoSrc from "../media/sohoolVid.mp4";
import '../style/videoBlackBox.css';
interface VideoProps {
    autoplay?: boolean;
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
      <video
        src={src}
        autoPlay={autoplay}
        loop={loop}
        controls={controls}
      />
    );
  };