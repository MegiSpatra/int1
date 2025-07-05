import React from 'react'
import Card from "./Card";

export default function List({ movies, onEdit, onDelete }) {
  return (
<div className="flex overflow-x-auto gap-4">
      {movies.map((movie) => (
        <Card key={movie.id} 
        movie={movie} 
        onEdit={onEdit} 
        onDelete={onDelete} />
      ))}
    </div>
  )
}
