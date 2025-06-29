import React from "react";
import Navbar from "../component/organisems/Navbar";
import Footer from "../component/organisems/Footer";

export default function HomeLayouts({ children }) {
  return (
    <>
        <Navbar />

        <main>
        {children}
        </main>

        <Footer />
    </>
  )
}
