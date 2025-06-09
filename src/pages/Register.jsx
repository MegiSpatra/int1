import React from 'react'
import bgRegist from '../assets/images/background/bg-register.jpg'
import logo from '../assets/images/logo/logo-chill.png'
import googleIcon from '../assets/images/logo/google-icon.png'

export default function Register() {
  return (
    <div className="font-[Lato] w-screen h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${bgRegist})`}}>
    <main className="bg-black/85 min-w-[306px] p-6 rounded-md text-white">
        <div className="flex flex-col items-center mb-6">
        <img className="w-[94px] h-[24px] mb-5" src={logo} alt="logo-chill" />
        <h3 className="text-lg font-bold mb-1">Daftar</h3>
        <p className="text-sm text-center">Selamat datang di Chill!</p>
        </div>

        <form className="space-y-5">
        {/* USERNAME */}
        <div className="flex flex-col gap-1">
            <label for="username" className="text-xs font-medium tracking-wide">Username</label>
            <input type="text" id="username" name="username" placeholder="Masukan username"
            className="bg-transparent text-sm px-3 py-2 border border-white/20 rounded-xl text-gray-300 focus:outline-none" />
        </div>

        {/* <!-- Password --> */}
        <div className="flex flex-col gap-1 relative">
            <label for="password" className="text-xs font-medium tracking-wide">Kata Sandi</label>
            <input type="password" id="password" name="password" placeholder="Masukan kata sandi"
            className="bg-transparent text-sm px-3 py-2 border border-white/20 rounded-xl text-gray-300 focus:outline-none" />
            <i className="fa-solid fa-eye-slash absolute right-3 top-9 text-xs text-gray-300 cursor-pointer togglePassword"></i>
        </div>

        {/* <!-- Konfirmasi Password --> */}
        <div className="flex flex-col gap-1 relative">
            <label for="confirm-password" className="text-xs font-medium tracking-wide">Konfirmasi Kata Sandi</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Masukan kembali kata sandi"
            className="bg-transparent text-sm px-3 py-2 border border-white/20 rounded-xl text-gray-300 focus:outline-none" />
            <i className="fa-solid fa-eye-slash absolute right-3 top-9 text-xs text-gray-300 cursor-pointer togglePassword"></i>
        </div>

        {/* <!-- Info --> */}
        <div className="text-[10px] text-gray-400 text-center">
            Sudah punya akun? <a href="./index.html" className="text-white underline">Masuk</a>
        </div>

        {/* <!-- Tombol --> */}
        <button type="submit" className="mb-2 w-full bg-transparent border border-white/20 rounded-xl py-2 text-[10px] font-semibold hover:bg-gray-700 transition">
            Daftar
        </button>

        <p className="text-center text-xs text-gray-400 my-2.5">Atau</p>

        <button type="button"
            className="w-full flex items-center justify-center gap-3 bg-transparent border border-white/20 rounded-xl py-2 text-[10px] font-semibold hover:bg-gray-700 transition">
            <img src={googleIcon} alt="google-icon" className="w-3 h-3" />
            <span>Daftar dengan Google</span>
        </button>
        </form>
    </main>
    </div>
  )
}
