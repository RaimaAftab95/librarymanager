import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";

const AddBook = ({ onCancel, onAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    category: "",
    quantity: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/books", formData);
      toast.success("Book added!");
      onAdded();
      onCancel();
    } catch (err) {
      console.error(err);
      toast.error("Save failed — check backend or CORS setup.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-auto border-t-4 border-purple-500 transform transition-all duration-300 hover:scale-[1.01]">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 italic flex items-center justify-center gap-2">
        <FaPlus /> Add a New Book
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter book title"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Author
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
        </div>

        {/* ISBN */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">ISBN</label>
          <input
            type="text"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            placeholder="Enter ISBN number"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter book category"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            min="1"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
