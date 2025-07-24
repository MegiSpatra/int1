import { useContext } from "react";
import { MainProfil } from "../components/MainProfil";
import { Navbar } from "../components/Navbar";
import { PopupContext } from "../initialMovies";
import { PopupDetailFilm } from "../components/PopupDetailFilm";

export const Profile = () => {
  return (
      <main className="bg-black text-white">
        <Navbar />
        <MainProfil />
      </main>
  );
};
