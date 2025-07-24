// import "./App.css";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./routes";

// function App() {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }
// export default App;

import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import{ Register } from './pages/Register';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { PopupProvider } from "./initialMovies";
import { Series } from './pages/Series';
import { Film } from './pages/Film';
import { DaftarSaya } from './pages/DaftarSaya';
import { Langganan } from './pages/Langganan';
import { Edit } from './pages/Edit';
import { WatchFilm } from './pages/WatchFilm';
import { WatchSeries } from './pages/WatchSeries';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <PopupProvider>
    <Routes>
        <Route index element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/beranda" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/series" element={<Series />} />
        <Route path="/film" element={<Film />} />
        <Route path="/daftarsaya" element={<DaftarSaya />} />
        <Route path="/langganan" element={<Langganan />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/watchfilm" element={<WatchFilm />} />
        <Route path="/watchseries" element={<WatchSeries />} />
        <Route path="/*" element={<NotFoundPage />} />
    </Routes>
    </PopupProvider>
  );
}
export default App;