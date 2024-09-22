import { useParams } from "react-router-dom";
import { Books } from "../utils/mockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./Style.css";
import { Link } from "react-router-dom";
function Bookdetails() {
  const params = useParams();
  const books = Books.find((book) => book.id == params.id);
  return (
    <>
      <div>
      <div className="backtohome">
          {/* creating a link to go back to browse */}
          <Link to="/browsebook">
            <FontAwesomeIcon icon={faArrowLeft} /> <span>Back to Home </span>
          </Link>
        </div>
      <div className="bookdetails">
      <div className="book-details">
        
        <h2>{books.title} </h2>
        <h2>
          <img src={books.cover_image} alt="" width="200px" height="200px" />{" "}
        </h2>
        <h2>{books.author} </h2>
        <h3>{books.description} </h3>
      </div>
      </div>
      </div>
    </>
  );
}
export default Bookdetails;
