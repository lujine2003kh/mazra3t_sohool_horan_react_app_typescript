import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterContainer = styled.footer`
  background-color: #56967A;
  color: #fff;
  padding: 20px;
  text-align: center;
  margin:0;
  position:relative;
  bottom:0;
  height:95px;
  width:97%;
`;

const SocialMediaLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const SocialMediaLink = styled.li`
  margin: 0 10px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #075835;
  }
`;
// const phone=styled.p`
//     padding:10px
// `;
const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaLinks>
        <SocialMediaLink>
          <FooterLink href="https://www.facebook.com/profile.php?id=100092726858413" target="_blank">
            <FacebookIcon />
          </FooterLink>
        </SocialMediaLink>
        <SocialMediaLink>
          <FooterLink href="https://www.twitter.com/" target="_blank">
            <TwitterIcon />
          </FooterLink>
        </SocialMediaLink>
        <SocialMediaLink>
          <FooterLink href="https://www.instagram.com/mazra3at_sohool_7oran/?igsh=MWd4amJ3djhraHI4Yg%3D%3D&fbclid=IwZXh0bgNhZW0CMTAAAR2G6Oxezk6_yRWbB6YOtove7-q-7RPRJJid9PtOuxyiTqDZ-d3AfIUu01E_aem_AcI0cgvqqDOkVTHmmEIGz8ayNRoFdpWeIHDUlooh4fcyNwQRYqug9wKOddUPbEYX6z9x1A2mFeCFH-4mo7Zmmk-Z" target="_blank">
            <InstagramIcon />
          </FooterLink>
        </SocialMediaLink>
      </SocialMediaLinks>
      <p>Copyright 2024  -- mazra3at_sohool_7oran</p>
      <p className='phone'>Owner Number : 0798250083</p>
    </FooterContainer>
  );
};

export default Footer;