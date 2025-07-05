// const [movies, setMovies] = useState([]);

// useEffect(() => {
//   fetch('https://68695cfa2af1d945cea1b797.mockapi.io/movies')
//     .then((res) => res.json())
//     .then((data) => setMovies(data))
//     .catch((err) => console.error(err));
// }, []);


// axios
import axios from "axios";

export const fetchMovies = async () => {
  try {
    const res = await axios.get("https://68695cfa2af1d945cea1b797.mockapi.io/movies");
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
