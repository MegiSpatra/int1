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
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Admin from './pages/Admin';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> 
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}