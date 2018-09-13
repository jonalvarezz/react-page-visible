import Link from "next/link";

const Header = () => (
  <header>
    <h1>
      <Link href="/">
        <a title="Go home">Page Visibility</a>
      </Link>
    </h1>
    <nav>
      <Link href="/">
        <a title="Home">Home</a>
      </Link>
      <Link href="/compat">
        <a title="view the Compat table">Compat</a>
      </Link>
      <a
        target="_blank"
        href="https://github.com/jonalvarezz/react-page-visible"
        title="View on GitHub"
      >
        Github
      </a>
    </nav>

    <style>{`
      header {
        position: relative;
        margin: 0 auto 3rem;
        padding: .8rem;
        border-bottom: 3px solid #eee;
        justify-content: space-between;
        text-transform: uppercase;
      }

      a:hover { color: inherit; }

      h1 {
        margin: 0;
        padding: 0;
      }
      h1 a {
        font-size: 1rem;
        font-weight: 600;
        display: block;
        color: #333;
      }

      header,
      nav {
        display: flex;
        align-items: center;
      }
      nav a {
        display: block;
        text-decoration: underline;
        color: #333;
        font-size: .7rem;
        padding: 0 .5rem;
      }

    `}</style>
  </header>
);

export default Header;
