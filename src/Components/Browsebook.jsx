
import { Books } from "../utils/mockData";
import { useState } from "react";
import { Link } from "react-router-dom";
import Bookcard from "./Bookcard";
import { useSelector } from "react-redux";

function Browsebook(){
    const [searchText,setSearchText] = useState("");
    const [filteringBooks,setFilteringBooks] = useState(Books);

    let bookItems = useSelector((store) => store.book.items)
    function updateText(e) {
      setSearchText(e.target.value);
      handleSearch();
    }
    
    function handleSearch(){
        const filtered = Books.filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase()));
        setFilteringBooks(filtered);
    }
    return (
      <>
        <div className="entire-browse">
          <div className="browsebook">
            <div className="input-field">
              <input
                type="text"
                placeholder="Enter the name"
                onChange={updateText}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
            <div className="browsebook-cards">
              {filteringBooks.map((book) => {
                return (
                  <div key={book.id}>
                    <Link
                      to={`/browsebook/bookdetails/${book.id}`}
                      key={book.id}>
                      <Bookcard bookDetails={book}></Bookcard>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
}
export default Browsebook;