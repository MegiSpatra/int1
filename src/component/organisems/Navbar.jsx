import React from "react";
import logo from "../../assets/images/logo/user.png"; // Adjust the path as necessary


export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-[#1c1c1e] px-8 py-4">
        <div className="text-xl font-bold text-amber-50">CHILL</div>
        <nav>
          <ul className="flex gap-6 list-none text-amber-50">
            <li className="cursor-pointer">Series</li>
            <li className="cursor-pointer">Film</li>
            <li className="cursor-pointer">Daftar Saya</li>
          </ul>
        </nav>
        <div className="flex items-center">
          <img src={logo} alt="User Logo" className="w-10 h-10 rounded-full" />
        </div>
      </header>
    </>
  );
}
