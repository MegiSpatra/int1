import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#1c1c1e] py-8 text-center">
        <div className="text-xl font-bold">CHILL</div>
        <div className="flex justify-center flex-wrap gap-8 mt-4 text-sm text-gray-300">
          <a href="#">Genre Film</a>
          <a href="#">FAQ</a>
          <a href="#">Kontak Kami</a>
          <a href="#">Privasi</a>
          <a href="#">Syarat & Ketentuan</a>
        </div>
      </footer>
    </>
  );
}
