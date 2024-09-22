import { useState } from "react";
import "./Style.css";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/addbookSlice";
import { Link } from "react-router-dom";
function Addbook() {
  const [newId, setNewId] = useState([]);
  const [newTitle, setNewTitle] = useState([]);
  const [newAuthor, setNewAuthor] = useState([]);
  const [newRating, setNewRating] = useState([]);
  const [newDes, setNewDes] = useState([]);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  let image = "https://c8.alamy.com/comp/AD3KRH/hard-back-book-AD3KRH.jpg";
  function addToList(newId, newAuthor, newTitle, newRating, newDes) {
    const data = {
      id: newId,
      title: newTitle,
      author: newAuthor,
      cover_image: image,
      rating: newRating,
      description: newDes,
    };
    dispatch(addBook(data));
  }
  function submitFunction() {
    addToList(newId, newAuthor, newTitle, newRating, newDes);
    setNewId("");
    setNewTitle("");
    setNewAuthor("");
    setNewRating("");
    setNewDes("");
  }
  function validateForm() {
    const errors = {};
    if (!newId || newId < 41 || newId > 100) {
      errors.id = "Invalid ID (must be between 41 and 100)";
    }
    if (!newTitle) {
      errors.title = "Title is required";
    }
    if (!newAuthor) {
      errors.author = "Author is required";
    }
    if (!newRating || newRating < 0 || newRating > 5) {
      errors.rating = "Invalid rating (must be between 0 and 5)";
    }
    if (!newDes) {
      errors.description = "Description is required";
    }
    setErrors(errors);
  }
  return (
    <>
      <div className="addbook">
        <h1 style={{ color: "black", textAlign: "center", marginTop: "5rem" }}>
          Enter the New Book Details
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (validateForm()) {
              submitFunction();
            }
          }}
        >
         <div className="id-title" >
         <input
            className="add-id"
            type="number"
            name="id"
            required
            max="100"
            min="41"
            value={newId}
            onChange={(e) => setNewId(e.target.value)}
            placeholder="Id"
          />
          {errors.id && <div style={{ color: "red" }}>{errors.id}</div>}
          <input
            className="add-title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            name="Title"
            required
            type="text"
            placeholder="Title"
          />
          {errors.title && <div style={{ color: "red" }}>{errors.title}</div>}
         </div>
          <div>
            <input
              className="add-author"
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)}
              name="Author"
              required
              type="text"
              placeholder="Author"
            />
            {errors.author && <div style={{ color: "red" }}>{errors.author}</div>}
            <input
              className="add-rating"
              value={newRating}
              max="5"
              min="0"
              onChange={(e) => setNewRating(e.target.value)}
              name="Rating"
              required
              type="number"
              placeholder="Rating"
            />
            {errors.rating && <div style={{ color: "red" }}>{errors.rating}</div>}
          </div>
          <textarea
            value={newDes}
            onChange={(e) => setNewDes(e.target.value)}
            name="Description"
            required
            type="text"
            rows="5"
            cols="51"
            placeholder="Description"
          ></textarea>
          {errors.description && <div style={{ color: "red" }}>{errors.description}</div>}
          <Link to="/browsebook" ><button onClick={submitFunction} className="btn" type="submit">
            Submit
          </button></Link>
        </form>
      </div>
    </>
  )
}
export default Addbook;
