import React from 'react';
import TitlebarBelowMasonryImageList from '../components/Title bar below image (masonry)';
import VideoPlay from '../components/videoSwimmingPool';
import PoolIcon from '@mui/icons-material/Pool';
import '../style/gallery.css';
const Gallery: React.FC = () => {
  return (
    <>
    <h1 className='check'>Check Our Gallery Photos</h1>
    <TitlebarBelowMasonryImageList/>
    <div className="parent grid">
      <div className="div1">
      <PoolIcon />
        <h1 className='look'>Look At Our Swimming Pool</h1>
      </div>
      <div className="div2"><VideoPlay/></div>
      {/* <div className="div3 "><PoolIcon/></div> */}
    </div>
    </>
  );
};

export default Gallery;
