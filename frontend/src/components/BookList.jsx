// import React, { useState } from "react";
// import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
// import axios from "axios";
// import toast from "react-hot-toast";
//
// const BookList = ({ books, onEdit, onAdd, fetchBooks }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedBookId, setSelectedBookId] = useState(null);
//
//   // Function to open modal
//   const handleDeleteClick = (id) => {
//     setSelectedBookId(id);
//     setShowModal(true);
//   };
//
//   // Confirm delete
//   const confirmDelete = async () => {
//     try {
//       await axios.delete(`http://localhost:8080/api/books/${selectedBookId}`);
//       toast.success("Book deleted!");
//       fetchBooks();
//     } catch (err) {
//       console.error(err);
//       toast.error("Delete failed");
//     } finally {
//       setShowModal(false);
//       setSelectedBookId(null);
//     }
//   };
//
//   // Cancel delete
//   const cancelDelete = () => {
//     setShowModal(false);
//     setSelectedBookId(null);
//   };
//
//   return (
//     <div>
//           {/* Main Title */}
//           <h1 className="text-3xl font-bold text-center mb-8 text-purple-700">
//             📖 Library Manager
//           </h1>
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-semibold">📚 Book List</h2>
//         <button onClick={onAdd} className="btn btn-success flex items-center gap-2">
//           <FaPlus /> Add New
//         </button>
//       </div>
//
//       {/* Book Grid */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {books.length === 0 ? (
//           <p className="text-center text-gray-500 col-span-full">No books found.</p>
//         ) : (
//           books.map((book) => (
//             <div key={book.id} className="card bg-base-100 shadow-xl border">
//               <div className="card-body">
//                 <h2 className="card-title">{book.title}</h2>
//                 <p className="text-sm opacity-75">{book.author}</p>
//                 <p className="text-xs text-gray-500">ISBN: {book.isbn}</p>
//                 <p className="text-xs text-gray-500">Category: {book.category}</p>
//                 <p className="text-xs text-gray-500">Quantity: {book.quantity}</p>
//                 <div className="card-actions justify-end mt-3">
//                   <button onClick={() => onEdit(book)} className="btn btn-sm btn-info">
//                     <FaEdit /> Edit
//                   </button>
//                   <button
//                     onClick={() => handleDeleteClick(book.id)}
//                     className="btn btn-sm btn-error"
//                   >
//                     <FaTrash /> Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//
//       {/* Delete Confirmation Modal */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">
//               Are you sure you want to delete this book?
//             </h3>
//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={cancelDelete}
//                 className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={confirmDelete}
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
//
// export default BookList;



import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

const BookList = ({ books, onEdit, onAdd, fetchBooks }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null);

  // Function to open modal
  const handleDeleteClick = (id) => {
    setSelectedBookId(id);
    setShowModal(true);
  };

  // Confirm delete
  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/books/${selectedBookId}`);
      toast.success("Book deleted!");
      fetchBooks();
    } catch (err) {
      console.error(err);
      toast.error("Delete failed");
    } finally {
      setShowModal(false);
      setSelectedBookId(null);
    }
  };

  // Cancel delete
  const cancelDelete = () => {
    setShowModal(false);
    setSelectedBookId(null);
  };

  return (
    <div className="p-4">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 italic">
        📖 Library Manager
      </h1>

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          📚 Book List
        </h2>
        <button
          onClick={onAdd}
 className="btn bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 shadow-md hover:scale-105 transition-transform duration-200"
//className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
        >
          <FaPlus className="text-white" /> Add New
        </button>
      </div>

      {/* Book Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full italic text-lg">
            No books found.
          </p>
        ) : (
          books.map((book) => (
            <div
              key={book.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-5"
            >
              <div className="card-body space-y-2">
                <h2 className="text-xl font-bold text-purple-700">
                  {book.title}
                </h2>
                <p className="text-md text-gray-700 italic">
                  Author: <span className="font-semibold">{book.author}</span>
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">ISBN:</span> {book.isbn}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Category:</span>{" "}
                  {book.category}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Quantity:</span>{" "}
                  {book.quantity}
                </p>

                {/* Buttons */}
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    onClick={() => onEdit(book)}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-blue-600 border border-blue-500 rounded-lg hover:bg-blue-50 transition duration-200"
                  >
                    <FaEdit className="text-blue-600" /> Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(book.id)}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-red-600 border border-red-500 rounded-lg hover:bg-red-50 transition duration-200"
                  >
                    <FaTrash className="text-red-600" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-2xl w-80 border-t-4 border-red-500">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Are you sure you want to delete this book?
            </h3>
            <div className="flex justify-end gap-3">
              <button
                onClick={cancelDelete}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookList;
