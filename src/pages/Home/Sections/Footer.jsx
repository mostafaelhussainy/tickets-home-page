import AppleIcon from "@mui/icons-material/Apple";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Footer = () => {
  return (
    <footer>
      <div className="download">
        <h4>Download the App</h4>
        <div className="row">
          <Button>
            <AppleIcon />
            <span>
              Download on the <strong>App Store</strong>
            </span>
          </Button>
          <Button>
            <PlayArrowIcon />
            <span>
              Get it on <strong>Google Play</strong>
            </span>
          </Button>
        </div>
      </div>
      <div className="links">
        <h4>Links</h4>
        <a href="">Terms Of Use</a>
        <a href="">Privacy Policy</a>
      </div>
      <div className="follow-us">
        <h4>Follow Us</h4>
        <div className="row">
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <YouTubeIcon />
          </IconButton>
        </div>
      </div>
      <div className="get-in-touch">
        <h4>Get In Touch</h4>
        <span>
          <AlternateEmailIcon />
          support@vertflare.com
        </span>
        <span>
          <LocalPhoneIcon />
          N/A
        </span>
      </div>
    </footer>
  );
};

export default Footer;
