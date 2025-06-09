import React from "react";
import HomeLayouts from "../layouts/homeLayouts";
import bgHome from '../assets/images/background/bg-beranda.png'; // Adjust the path as necessary

export default function Home() {
  return (
    <>
     <HomeLayouts>
        <div className="relative pt-24 bg-center bg-cover bg-no-repeat p-8 flex flex-col text-left" style={{ backgroundImage: `url(${bgHome})` }}>
          <div className="absolute inset-0 bg-black/70 z-0"></div>
          <div className="relative z-10 px-20 py-10 flex flex-col text-left">
            <h1 className="text-2xl mb-2 text-white font-bold">Duty After School</h1>
            <p className="text-[18px] font-medium text-white leading-[140%] tracking-[0.2px] mb-[1px]">Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,</p>
            <p>Departemen Pertahanan mulai</p>
            <p>merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.</p>
            <div className="mt-4 flex gap-4">
              <button className="bg-white text-black px-4 py-2 rounded">Mulai</button>
              <button className="bg-white text-black px-4 py-2 rounded">Selengkapnya</button>
            </div>
          </div>
        </div>

        <section className="px-8 py-4">
          <h2 className="px-20 py-10 text-xl font-semibold">Melanjutkan Tonton Film</h2>
          <div className="flex gap-4 overflow-x-auto px-20">
            <div className="w-[302px] h-[162px] rounded-lg bg-[#333]">
              <img src="./images/content/2.png" alt="Film 1" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-[302px] h-[162px] rounded-lg bg-[#333]">
              <img src="./images/content/1 .png" alt="Film 2" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-[302px] h-[162px] rounded-lg bg-[#333]">
              <img src="./images/content/3.png" alt="Film 3" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-[302px] h-[162px] rounded-lg bg-[#333]">
              <img src="./images/content/4.png" alt="Film 4" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="px-20 py-10 text-xl font-semibold">Top Rating Film dan Series Hari Ini</h2>
          <div className="flex gap-4 overflow-x-auto px-20 mt-5">
            <div className="w-[95.6px] h-[143.39px]">
              <img src="./images/content/topRating/allOfUs.png" alt="Top 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-[95.6px] h-[143.39px]">
              <img src="./images/content/topRating/bigHero.png" alt="Top 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-[95.6px] h-[143.39px]">
              <img src="./images/content/topRating/jurasskWorld.png" alt="Top 3" className="w-full h-full object-cover" />
            </div>
            <div className="w-[95.6px] h-[143.39px]">
              <img src="./images/content/topRating/sonic.png" alt="Top 4" className="w-full h-full object-cover" />
            </div>
            <div className="w-[95.6px] h-[143.39px]">
              <img src="./images/content/topRating/suzume.png" alt="Top 5" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section>
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

        <section>
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

     </HomeLayouts>
    </>
  );
}
