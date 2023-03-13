import React from "react";
import Footer from "../common/Footer/Footer";

import WithSubnavigation from "../common/Navbars/NarBar";

const Layout = ({ children }) => {
  return (
    <>
      <WithSubnavigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
