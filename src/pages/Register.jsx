import bgRegist from "../assets/images/background/bg-register.jpg";
import logo from "../assets/images/logo/logo-chill.png";
import googleIcon from "../assets/images/logo/google-icon.png";

import { faEye, faEyeSlash, faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../redux/slices/authSlice';
// import axios from '../api/axios';

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const confirmPasswordRef = useRef(null);
  const navigate = useNavigate();

  const handleRegisterClick = (e) => {
    e.preventDefault();

    if (!username || !password || !passwordConfirm) {
      return;
    }

    if (passwordConfirm !== password) {
      setError("Konfirmasi salah");
      setPasswordConfirm("");
      confirmPasswordRef.current.focus();
      return;
    }

    const userIdentity = {
      username: username,
      password: password,
    };
    localStorage.setItem("infoUser", JSON.stringify(userIdentity));
    navigate("/login");
  };

  return (
    <main className="font-Lato w-screen h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgRegist})` }}>
      <main className="bg-black/85 min-w-[306px] p-6 rounded-md text-white">
        <div className="flex flex-col items-center mb-6">
          <img className="w-[94px] h-[24px] mb-5" src={logo} alt="logo-chill" />
          <h3 className="text-lg font-bold mb-1">Daftar</h3>
          <p className="text-sm text-center">Selamat datang di Chill!</p>
        </div>

        <form className="space-y-5">
          {/* Username */}
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-xs font-medium tracking-wide">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="username"
              name="username"
              placeholder="Masukan username"
              className="bg-transparent text-sm px-3 py-2 border border-white/20 rounded-xl text-gray-300 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1 relative">
            <label htmlFor="password" className="text-xs font-medium tracking-wide">
              Kata Sandi
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              placeholder="Masukan kata sandi"
              className="bg-transparent text-sm px-3 py-2 border border-white/20 rounded-xl text-gray-300 focus:outline-none"
            />
            <FontAwesomeIcon onClick={() => setShowPassword(!showPassword)} className="fa-regular text-[11px] fa-eye-slash absolute  right-4 cursor-pointer top-8.5" icon={showPassword ? faEyeSlash : faEye} />
          </div>

          {/* Konfirmasi Password */}
          <div className="flex flex-col gap-1 relative">
            <label htmlFor="confirmPassword" className="text-xs font-medium tracking-wide">
              Konfirmasi Kata Sandi
            </label>
            <input
              ref={confirmPasswordRef}
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              type="password"
              id="confirm-password"
              name="confirmPassword"
              placeholder="Masukan kembali kata sandi"
              className="bg-transparent text-sm px-3 py-2 border border-white/20 rounded-xl text-gray-300 focus:outline-none"
            />
          </div>

          <div className="text-[10px] text-gray-400 text-center">
            Sudah punya akun?
            <Link to="/login" href="/login" className="text-white underline">
              {" "}
              Masuk
            </Link>
          </div>
          <section className="">
            <button onClick={(e) => handleRegisterClick(e)} type="submit" className="mb-2 w-full bg-transparent border border-white/20 rounded-xl py-2 text-[10px] font-semibold hover:bg-gray-700 transition">
              Daftar
            </button>
          </section>

          <p className="text-center text-xs text-gray-400 my-2.5">Atau</p>

          <button type="button" className="w-full flex items-center justify-center gap-3 bg-transparent border border-white/20 rounded-xl py-2 text-[10px] font-semibold hover:bg-gray-700 transition">
            <img src={googleIcon} alt="google-icon" className="w-3 h-3" />
            <span>Daftar dengan Google</span>
          </button>
        </form>
      </main>
    </main>
  );
};
