import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      
        <li>
           <a href="https://github.com/Adriano1983" target="blanck" className="social-btn" >
            <i><FaGithub /></i>
        </a>
        </li>
        <li>
           <a href="https://www.linkedin.com/in/adriano-beserra-0422541a2/" target="blanck" className="social-btn" >
            <i><FaLinkedinIn /></i>
        </a>
        </li>
        <li>
           <a href="https://www.instagram.com/adrian.beserra/" target="blanck" className="social-btn" >
            <i><FaInstagram /></i>
        </a>
        </li>
       
        
      
    </section>
  );
};

export default SocialNetworkContainer;
