// import React from 'react'

import googleIcon from "../assets/images/logo/google-icon.png";
import logoChill from "../assets/images/logo/logo-chill.png";
import bgLogin from "../assets/images/background/bg-login.jpg";
// import Home from './Home';

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [infoUser, setInfoUser] = useState(() => {
    const saved = localStorage.getItem("infoUser");
    return saved ? JSON.parse(saved) : null;
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleMasukClick = (e) => {
    e.preventDefault();
    if (!username || !password) {
      return;
    }
    if (infoUser.username !== username || infoUser.password !== password) {
      setUsername("");
      setPassword("");
      setError("Username Atau Password Salah!");
      return;
    }
    navigate("/beranda");
  };

  return (
    <div>
      <div
        className="font-Lato w-screen h-screen flex items-center 
            justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgLogin})` }}
      >
        <main className="bg-black/85 min-w-[306px] p-6 rounded-md text-white">
          <div className="flex flex-col items-center mb-6">
            <img className="w-[94px] h-[24px] mb-5" src={logoChill} alt="logo-chill" />
            <h3 className="text-lg font-bold mb-1">Masuk</h3>
            <p className="text-sm text-center">Selamat datang kembali</p>
          </div>

          <form onSubmit={(e) => handleMasukClick(e)} className="space-y-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="text-xs font-medium tracking-wide">
                Username
              </label>
              <span className="text-red-500 ">{error}</span>

              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                id="username"
                placeholder="Masukan username"
                className="bg-transparent text-sm px-3 py-2 border border-white/20 rounded-xl text-gray-300 focus:outline-none"
              />
              {/* <i className="fa-solid fa-eye-slash absolute right-3 top-9 text-xs text-gray-300 cursor-pointer togglePassword"></i> */}
            </div>

            <div className="flex flex-col gap-1 relative">
              <label htmlFor="password" className="text-xs font-medium tracking-wide">
                Kata sandi
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="password"
                placeholder="Masukan kata sandi"
                type={showPassword ? "text" : "password"}
                className="bg-transparent text-sm px-3 py-2 border border-white/20 rounded-xl text-gray-300 focus:outline-none"
              />

              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={() => setShowPassword(!showPassword)} className="fa-solid fa-eye-slash absolute right-3 top-9 text-xs text-gray-300 cursor-pointer togglePassword" />

              {/* <i className="fa-solid fa-eye-slash absolute right-3 top-9 text-xs text-gray-300 cursor-pointer togglePassword"></i> */}
            </div>

            <div className="flex justify-between text-[10px] text-gray-400 mt-[-16px] mb-4">
              <p>
                Belum punya akun?{" "}
                <a href="/register" className="text-white underline">
                  Daftar
                </a>
              </p>
              <a href="#" className="text-white underline">
                Lupa kata sandi?
              </a>
            </div>

            <button type="submit" className="w-full bg-transparent border border-white/20 rounded-xl py-2 text-[10px] font-semibold hover:bg-gray-700 transition  text-white">
              Masuk
            </button>

            <p className="text-center text-xs text-gray-400 my-2">Atau</p>

            <button type="button" className="w-full flex items-center justify-center gap-3 bg-transparent border border-white/20 rounded-xl py-2 text-[10px] font-semibold hover:bg-gray-700 transition">
              <img src={googleIcon} alt="google-icon" className="w-3 h-3" />
              <span>Masuk dengan Google</span>
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};
