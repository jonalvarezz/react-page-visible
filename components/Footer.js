const Footer = () => (
  <footer>
    <a href="https://twitter.com/jonalvarezz" target="_blank">
      @jonalvarezz
    </a>

    <style jsx>{`
      footer {
        margin-top: 4rem;
        text-align: center;
      }
      a {
        color: #777;
        font-size: 0.8rem;
        text-decoration: none;
        transition: color 200ms ease;
        font-weight: 600;
      }
      a:hover {
        color: #333;
        text-decoration: none;
      }
    `}</style>
  </footer>
);

export default Footer;
