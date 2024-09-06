import React from 'react';
import "../style/footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {SvgIconComponent} from "@mui/icons-material";

interface SocialMedia {
  name: string;
  url: string;
  icon: SvgIconComponent;
}

const socialMedia: SocialMedia[] = [
  {
    name: 'FacebookIcon',
    url: 'https://www.facebook.com',
    icon: FacebookIcon,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com',
    icon: InstagramIcon,
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="footer">
        <h1>test</h1>
        <FacebookIcon/>
        <i className="InstagramIcon" aria-hidden="false"></i>
      <div className="social-media">
        {socialMedia.map((media, index) => (
          <a
            key={index}
            href={media.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {media.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;