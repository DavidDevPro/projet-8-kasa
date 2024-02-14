import logoFooter from "../assets/img/logoFooter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <img src={logoFooter} alt=" logo kasa pied de page" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
