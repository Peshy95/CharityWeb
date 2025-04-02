import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"> 
        <img src="src/assets/logo.png" alt=" " />
        <span></span>
      </div>
      <ul className="nav-links">
        <li><a href="#">Get Involved</a></li>
        <li><a href="#">Our Mission</a></li>
        <li><a href="#">Donate Now</a></li>
      </ul>
      <div className="auth-buttons">
        <button className="join">Join</button>
        <button className="login">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
