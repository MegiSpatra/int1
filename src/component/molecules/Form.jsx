import React from 'react'
// import { Form } from 'react-router-dom';

export default function Form({title, genre, img, setTitle, setGenre, setImg, handleSubmit, editingId}) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-4">
        {editingId ? 'Edit Film' : 'Tambah Film'}
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
        {editingId ? 'Update' : 'Tambah'}
      </button>
    </div>
  );
}

