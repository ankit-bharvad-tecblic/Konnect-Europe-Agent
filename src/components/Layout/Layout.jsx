import React from "react";
import Footer from "../common/Footer/Footer";

import Navbar from "../common/Navbars/NarBar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
