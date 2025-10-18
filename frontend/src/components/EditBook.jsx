import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const EditBook = ({ book, onCancel, onUpdated }) => {
  const [formData, setFormData] = useState(book);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/books/${book.id}`, formData);
      toast.success("Book updated!");
      onUpdated();
      onCancel();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update book — check backend or CORS setup.");
    }
  };

  return (
    <div className="bg-base-100 p-6 rounded-2xl shadow-md max-w-lg mx-auto shadow-lg shadow-purple-300">
      <h2 className="text-xl font-bold mb-4 text-center">✏️ Edit Book</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {["title", "author", "isbn", "category", "quantity"].map((f) => (
          <input
            key={f}
            name={f}
            type={f === "quantity" ? "number" : "text"}
            value={formData[f]}
            onChange={handleChange}
            placeholder={f.charAt(0).toUpperCase() + f.slice(1)}
//             className="input input-bordered w-full"
className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
        ))}
        <div className="flex justify-end gap-3 mt-3">
          <button type="button"  className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
