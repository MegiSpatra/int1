
import HomeLayouts from "../layouts/homeLayouts";
import bgHome from '../assets/images/background/bg-beranda.png'; // Adjust the path as necessary
import content1 from "../assets/images/content/allOfUs.png";
import content2 from "../assets/images/content/dontLook.png";
import content3 from "../assets/images/content/blueLock.png";
import content4 from "../assets/images/content/AMan.png";  
import topRate from "../assets/images/content/topRating/allOfUs.png";
import topRate2 from "../assets/images/content/topRating/bigHero.png";
import topRate3 from "../assets/images/content/topRating/jurasskWorld.png"; 
import topRate4 from "../assets/images/content/topRating/sonic.png";
import topRate5 from "../assets/images/content/topRating/suzume.png";

import axios from "axios";
import React, { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL + "/movies";

export default function Home() {
  return (
    <>
    <HomeLayouts> 

     <div className="bg-[#1c1c1e] text-white font-Lato w-full h-full">
        <div className="relative pt-24 bg-center bg-cover bg-no-repeat p-8 flex flex-col text-left" style={{ backgroundImage: `url(${bgHome})` }}>
          <div className="absolute inset-0 bg-black/70 z-0"></div>
          <div className="relative z-10 px-20 py-10 flex flex-col text-left">
            <h1 className="text-2xl mb-2 text-white font-bold">Duty After School</h1>
            <p className="font-Lato text-white leading-[140%] tracking-[0.2px] mb-[1px]">Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,</p>
            <p>Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa</p>
            <p> sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.</p>
            <div className="mt-4 flex gap-3 ">
              <button className="bg-blue-900 text-white px-4 py-2 rounded-full ">Mulai</button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded-full"> Selengkapnya</button>
            </div>
          </div>
        </div>

        <section className="px-8 py-4 w-1,440px mx-auto overflow-auto ">
          <h2 className="px-20 py-10 text-xl font-semibold">Melanjutkan Tonton Film</h2>
          <div className="flex gap-4 w-full h-full overflow-x-auto">
            <div className="flex gap-4 overflow-x-auto px-20">
            <div className="w-[302] h-[162px] rounded-lg bg-[#333]">
              <img className  ="w-full h-full object-cover rounded-lg" src = {content1} alt="Film 1" />
            </div>
            <div className="w-[302px] h-[162px] rounded-lg bg-[#333]">
              <img src={content2} alt="Film 2" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-[302px] h-[162px] rounded-lg bg-[#333]">
              <img src={content4} alt="Film 3" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-[302px] h-[162px] rounded-lg bg-[#333]">
              <img src={content3} alt="Film 4" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
          </div>
          
        </section>

        <section className="px-8 py-4 w-1,440px mx-auto">
          <h2 className="px-20 py-10 text-xl font-semibold">Top Rating Film dan Series Hari Ini</h2>
          <div className="flex gap-4 overflow-x-auto px-20 mt-5">
            <div className="w-[234px] h-[365px]">
              <img src={topRate} alt="Top 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-[234px] h-[365px]">
              <img src={topRate2} alt="Top 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-[234px] h-[365px]">
              <img src={topRate3} alt="Top 3" className="w-full h-full object-cover" />
            </div>
            <div className="w-[234px] h-[365px]">
              <img src={topRate4} alt="Top 4" className="w-full h-full object-cover" />
            </div>
            <div className="w-[234px] h-[365px]">
              <img src={topRate5} alt="Top 5" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section className="px-8 py-4 w-1,440px mx-auto">
          <h2 className="px-20 py-10 text-xl font-semibold">Film Trending</h2>
          <div className="flex gap-4 overflow-x-auto px-20">
            <div className="w-[302px] h-[162px] rounded-lg bg-[#333]">
              <img src="trend1.jpg" alt="Trending 1" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-[302px] h-[162px] rounded-lg bg-[#333]">
              <img src="trend2.jpg" alt="Trending 2" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-[302px] h-[162px] rounded-lg bg-[#333]">
              <img src="trend3.jpg" alt="Trending 3" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </section>

        <section className="px-8 py-4 w-1,440px mx-auto">
          <h2 className="px-20 py-10 text-xl font-semibold">Rilis Baru</h2>
          <div className="flex gap-4 overflow-x-auto px-20">
            <div className="w-[302px] h-[162px] rounded-lg bg-[#333]">
              <img src="new1.jpg" alt="New 1" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-[302px] h-[162px] rounded-lg bg-[#333]">
              <img src="new2.jpg" alt="New 2" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-[302px] h-[162px] rounded-lg bg-[#333]">
              <img src="new3.jpg" alt="New 3" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </section>

     </div>

    </HomeLayouts>
    </>
  );
}
