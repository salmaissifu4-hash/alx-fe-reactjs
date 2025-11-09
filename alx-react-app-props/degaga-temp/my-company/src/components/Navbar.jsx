import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{  display: 'flex', justifyContent: 'center', backgroundColor: '#333', padding: '10px', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>About</Link>
      <Link to="/services" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Services</Link>
      <Link to="/contact" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;