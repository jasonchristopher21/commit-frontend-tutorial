import "../styles.css"

export default function Navbar() {
  return (
    <nav>
      <div className="navbar-wrapper">
        Your Name
        <ul className="navbar-content">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
