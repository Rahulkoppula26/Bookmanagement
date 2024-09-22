import { Books } from "../utils/mockData";
import { Link } from "react-router-dom";
import Bookcard from "./Bookcard";
import "./Style.css"
import { useState } from "react";

function Booklist() {
  const [popular,setPopular] =useState([])
  function filterPopolarBooks(){
    const PopularBooksAre = Books.filter((book) => book.rating >= 4.5);
    setPopular(PopularBooksAre);
  }
  
  return (
    <>
     <div className="viewmoreBtn">
     <button  onClick={filterPopolarBooks} >View More</button>
     </div>
      <div className="popular-cards">
        {
          popular.map((book) => (
              <div  className="card-container" key={book.id} >
                <Link to = {`bookdetails/${book.id}`}  key={book.id} >
                   <Bookcard key={book.id} bookDetails={book}></Bookcard>
                </Link>
              </div>
          ))
      }
      </div>
      <h1 style={{textAlign:"center"}} >All Books</h1>
      <div className="all-books">
        {Books.map((book) => {
          return (
            <div key={book.id} className="card-container" >
              <Link to = {`bookdetails/${book.id}`} key={book.id} >
                 <Bookcard key={book.id} bookDetails={book}></Bookcard>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Booklist;
