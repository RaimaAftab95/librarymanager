import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import { FaBook } from "react-icons/fa";

const App = () => {
  const [books, setBooks] = useState([]);
  const [view, setView] = useState("list");
  const [selectedBook, setSelectedBook] = useState(null);

  const API_URL = "http://localhost:8080/api/books";

  const fetchBooks = async () => {
    try {
      const res = await axios.get(API_URL);
      setBooks(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch books");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const showList = () => {
    setSelectedBook(null);
    setView("list");
  };

  const showAdd = () => setView("add");
  const showEdit = (book) => {
    setSelectedBook(book);
    setView("edit");
  };

  return (
    <div className="min-h-screen bg-base-200">
      <Toaster position="top-center" />
{/*       <div className="navbar bg-primary text-primary-content px-6"> */}
{/*         <FaBook className="text-2xl mr-2" /> */}
{/*         <span className="font-bold text-lg">Library Manager</span> */}
{/*       </div> */}

<div className="flex items-center bg-blue-700 text-white px-8 py-4 shadow-md">
  <span className="text-3xl mr-3">📘</span>
  <span className="font-bold text-2xl tracking-wide">Library Manager</span>
</div>


      <div className="max-w-6xl mx-auto p-6">
        {view === "list" && (
          <BookList books={books} onEdit={showEdit} onAdd={showAdd} fetchBooks={fetchBooks} />
        )}
        {view === "add" && <AddBook onCancel={showList} onAdded={fetchBooks} />}
        {view === "edit" && selectedBook && (
          <EditBook book={selectedBook} onCancel={showList} onUpdated={fetchBooks} />
        )}
      </div>
    </div>
  );
};

export default App;
