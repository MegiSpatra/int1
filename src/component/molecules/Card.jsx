import React from 'react'

export default function Card({ movie, onEdit, onDelete }) {
  return (
    <div>
      <div className="min-w-[200px] bg-gray-800 rounded overflow-hidden shadow-lg">
      <img src={movie.img} alt={movie.title} className="w-full h-40 object-cover" />
      <div className="p-3">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-lg font-medium">{movie.genre}</p>
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => onEdit(movie)}
            className="text-sm bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(movie.id)}
            className="text-sm bg-red-600 hover:bg-red-700 px-2 py-1 rounded"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
