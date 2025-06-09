import React from 'react'
// import './App.css'
import googleIcon from "../assets/images/logo/google-icon.png";
import logoChill from "../assets/images/logo/logo-chill.png";
import bgLogin from "../assets/images/background/bg-login.jpg";

export default function Login() {
  return (
    <div>
          <div
            className="font-Lato w-screen h-screen flex items-center 
            justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgLogin})` }}>
            <main className="bg-black/85 min-w-[306px] p-6 rounded-md text-white">
              <div className="flex flex-col items-center mb-6">
                <img className="w-[94px] h-[24px] mb-5" src={logoChill} alt="logo-chill" />
                <h3 className="text-lg font-bold mb-1">Masuk</h3>
                <p className="text-sm text-center">Selamat datang kembali</p>
              </div>
      
              <form className="space-y-5">
                <div className="flex flex-col gap-1">
                  <label htmlFor="username" className="text-xs font-medium tracking-wide">
                    Username
                  </label>
                  <input type="text" name="username" id="username" placeholder="Masukan username" className="bg-transparent text-sm px-3 py-2 border border-white/20 rounded-xl text-gray-300 focus:outline-none" />
                  <i className="fa-solid fa-eye-slash absolute right-3 top-9 text-xs text-gray-300 cursor-pointer togglePassword"></i>
                </div>
      
                <div className="flex flex-col gap-1 relative">
                  <label htmlFor="password" className="text-xs font-medium tracking-wide">
                    Kata sandi
                  </label>
                  <input type="password" name="password" id="password" placeholder="Masukan kata sandi" className="bg-transparent text-sm px-3 py-2 border border-white/20 rounded-xl text-gray-300 focus:outline-none" />
                  <i className="fa-solid fa-eye-slash absolute right-3 top-9 text-xs text-gray-300 cursor-pointer togglePassword"></i>
                </div>
      
                <div className="flex justify-between text-[10px] text-gray-400 mt-[-16px] mb-4">
                  <p>
                    Belum punya akun?{" "}
                    <a href="./register.html" className="text-white underline">
                      Daftar
                    </a>
                  </p>
                  <a href="#" className="text-white underline">
                    Lupa kata sandi?
                  </a>
                </div>
      
                <button type="submit" className="w-full bg-transparent border border-white/20 rounded-xl py-2 text-[10px] font-semibold hover:bg-gray-700 transition">
                  <a href="beranda.html" className="block w-full text-white">
                    Masuk
                  </a>
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
}
