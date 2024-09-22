import "./Style.css"
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header" >
        <h1 className="welcome-msg" style={{textAlign:"center", color:"black"}} >Welcome to Online Book Library System</h1>
        <nav >
            <Link to="/" ><p>Home</p></Link>
            <Link to="browsebook" ><p>Browse Books</p></Link>
            <Link to="addbook" >  <p>Add Book</p></Link>
        </nav>
        <div className="popular-text" >
          <h2>Popular Books</h2>
          <ul>
            <div>
            <li>Horror</li>
            <li>Women's fiction</li>
            </div>
            <div>
            <li>Self-help Books</li>
            <li>Thriller</li>
            </div>
          </ul>
        </div>
        
      </div>
    </>
  );
}
export default Header;