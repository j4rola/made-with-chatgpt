import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand">My App</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/about" legacyBehavior>
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/learn-more" legacyBehavior>
                <a className="nav-link">Learn More</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/get-started" legacyBehavior>
                <a className="nav-link">Get Started</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;