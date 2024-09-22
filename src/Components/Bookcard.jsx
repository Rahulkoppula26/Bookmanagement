// import { Books } from "../utils/mockData";
import "./Style.css"
function Bookcard(props){

    return (
        <>
        <div className="book-card" >
            <img src={props.bookDetails.cover_image} alt="" height="250px" />
            <p className="card-title" >{props.bookDetails.title} </p>
            <p className="card-author" >{props.bookDetails.author} </p>
            <center><button>View Details</button></center>
            {/* <h3>{props.bookDetails} </h3> */}
            {/* <h3>{props.bookDetails} </h3> */}

        </div>
        </>
    )
}
export default Bookcard;