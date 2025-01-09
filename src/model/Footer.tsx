import { FRONT_END_MENTOR_URL, MY_URL_Link } from "../config/config";
import Rules from "./Rules";

const Footer = () => {
  return (
    <footer className="footer">
      <Rules />
      <section className="footer-link">
        Challenge by
        <a
          className="a"
          href={FRONT_END_MENTOR_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by
        <a
          className="a"
          href={MY_URL_Link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Peter Godspower
        </a>
        .
      </section>
    </footer>
  );
};

export default Footer;
