import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Matheus Battisti" />
      <p className="title">Desenvolvedor <br />Front-end</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="https://drive.usercontent.google.com/u/0/uc?id=1M_VvSxel_hekewyznYyLeCcvslqopROQ&export=download" target="blanck" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
