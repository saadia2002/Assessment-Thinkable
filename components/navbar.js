// components/navbaralt.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          background: #333;
          color: #fff;
          padding: 1rem;
        }
        ul {
          list-style: none;
          display: flex;
          gap: 1rem;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
}
