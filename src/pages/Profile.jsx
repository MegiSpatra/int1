import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../redux/slices/favoriteSlice';

export default function Profile() {
  const user = useSelector(state => state.auth.user);
  const favorites = useSelector(state => state.favorite);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Welcome, {user?.username}</h2>
      <h3>Favorites:</h3>
      <ul>
        {favorites.map(movie => (
          <li key={movie.id}>
            {movie.title}
            <button onClick={() => dispatch(removeFavorite(movie.id))}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
