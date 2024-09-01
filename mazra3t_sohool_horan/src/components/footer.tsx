import React from 'react';
import "../style/footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
interface SocialMedia {
  name: string;
  url: string;
  icon: string;
}

const socialMedia: SocialMedia[] = [
  {
    name: 'FacebookIcon',
    url: 'https://www.facebook.com',
    icon: 'FacebookIcon',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com',
    icon: 'InstagramIcon',
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        {socialMedia.map((media, index) => (
          <a
            key={index}
            href={media.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={media.icon} aria-hidden="true"></i>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;