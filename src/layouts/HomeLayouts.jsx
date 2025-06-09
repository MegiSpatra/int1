import React from "react";
import Navbar from "../component/organisems/Navbar";
import { Children } from "react";
import Footer from "../component/organisems/Footer";

export default function homeLayouts() {
  return (
    <>
        <Navbar />
        {Children}
        <Footer />
    </>
  )
}
