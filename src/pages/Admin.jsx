import HomeLayouts from "../layouts/homeLayouts";
import Form from "../component/molecules/Form";
import List from "../component/molecules/List";
import { fetchMovies } from "../initialMovies";

import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";  


// const API_URL = "https://68695cfa2af1d945cea1b797.mockapi.io/movies";
const API_URL = import.meta.env.VITE_API_URL + "/movies";

export default function Admin() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [img, setImg] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Ambil data film dari API saat pertama kali render
    useEffect(() => {
        fetchMovies().then(setMovies);
    }, []);

  // Tambah atau Edit
  const handleSubmit = () => {
    if (!title || !genre || !img) return;

    const payload = { title, genre, img };

    if (editingId) {
      // EDIT
      axios
        .put(`${API_URL}/${editingId}`, payload)
        .then((res) => {
          setMovies((prev) =>
            prev.map((m) => (m.id === editingId ? res.data : m))
          );
          resetForm();
        })
        .catch((err) => console.error("Gagal update:", err));
    } else {
      // TAMBAH
      axios
        .post(API_URL, payload)
        .then((res) => {
          setMovies([...movies, res.data]);
          resetForm();
        })
        .catch((err) => console.error("Gagal tambah:", err));
    }
  };

  // Hapus film
  const handleDelete = (id) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => setMovies((prev) => prev.filter((m) => m.id !== id)))
      .catch((err) => console.error("Gagal hapus:", err));
  };

  const handleEdit = (movie) => {
    setTitle(movie.title);
    setGenre(movie.genre);
    setImg(movie.img);
    setEditingId(movie.id);
  };

  const resetForm = () => {
    setTitle("");
    setGenre("");
    setImg("");
    setEditingId(null);
  };

  return (
    <HomeLayouts>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-6">🎬 Chill Movie Admin (Axios)</h1>

        {/* Form Input */}
        <div className="bg-gray-900 p-4 rounded-lg mb-6">
          <h2 className="text-xl text-amber-50 font-semibold mb-4">
            {editingId ? "Edit Film" : "ADMIN - Tambah Film"}
          </h2>
          <input
            type="text"
            placeholder="Judul film"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
          />
          <input
            type="text"
            placeholder="Genre film"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
          />
          <input
            type="text"
            placeholder="URL gambar"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            {editingId ? "Update" : "Tambah"}
          </button>
        </div>

        {/* List Film */}
        <List movies={movies} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </HomeLayouts>
  );
}