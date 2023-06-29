import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 style={{ color: 'navy', textAlign: 'left', marginBottom: '0' }}>Podcast</h1>
        <hr />
        <br />
        </Link>
      </div>
    );
  };
  
  export default Header;