import * as React from 'react';
import '../style/gallery.css';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
//images
import bedroom1 from '../media/bedroom1.jpg';
import bedroom2 from '../media/bedroom2.jpg';
import bedroom3 from '../media/bedroom3.jpg';
import kitchen from '../media/kitchen.jpg';
import living_room1 from '../media/living_room.jpg';
import living_room2 from '../media/living_room2.jpg';
import living_room3 from '../media/living_room3.jpg';
import out1 from '../media/out1.jpg';
import out5 from '../media/out5.jpg';
import out11 from '../media/out11.jpg';
import out22 from '../media/out22.jpg';
import out33 from '../media/out33.jpg';
import out44 from '../media/out44.jpg';
import out77 from '../media/out77.jpg';
import out88 from '../media/out88.jpg';
import swim1 from '../media/swim1.jpg';
import swim2 from '../media/swim2.jpg';
import swim3 from '../media/swim3.jpg';
import swim4 from '../media/swim4.jpg';
import swim5 from '../media/swim5.jpg';
import swim6 from '../media/swim6.jpg';
export default function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ width: 900, height: 600, overflowY: 'scroll' }} className='gall' >
      <ImageList className='gallery' variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: bedroom1,
    title: 'Bedroom1',
    author: 'Single Beds Bedrooms',
  },
  {
    img: bedroom2,
    title: 'bedroom2',
    author: 'Master Bedroom',
  },
  {
    img: bedroom3,
    title: 'bedroom3',
    author: 'Master Bathroom',
  },
  {
    img: kitchen,
    title: 'Kitchen',
    author: 'Kitchen',
  },
  {
    img:living_room1,
    title: 'sofas',
    author: 'Living room Sofas',
  },
  {
    img: living_room2,
    title: 'fireplace_tv',
    author: 'Fireplace and TV',
  },
  {
    img: living_room3,
    title: 'living room',
    author: 'Living room',
  },
  {
    img: out1,
    title: 'out1',
    author: 'Outside View',
  },
  {
    img: out5,
    title: 'out5',
    author: 'Outdoor Seating',
  },
  {
    img: out11,
    title: 'out11',
    author: 'PlayGround',
  },
  {
    img: out22,
    title: 'out22',
    author: 'Trampoline , PlayGround',
  },
  {
    img: out33,
    title: 'Out_view',
    author: 'Outside view Night',
  },
  {
    img: out44,
    title: 'Out_view',
    author: 'Mini Waterfall',
  },
  {
    img: out77,
    title: 'Out_view',
    author: 'Outside view Night',
  },
  {
    img: out88,
    title: 'Out_view',
    author: 'Outside FireGrill',
  },
  {
    img:swim1,
    title: 'pool',
    author: 'Covered Pool',
  },
  {
    img:swim3,
    title: 'pool',
    author: 'Uncovered Pool Night',
  },
  {
    img: swim4,
    title: 'Out_view',
    author: 'Swimming Pool',
  },
  {
    img: swim5,
    title: 'Out_view',
    author: 'Night Swimming Pool',
  },
];
