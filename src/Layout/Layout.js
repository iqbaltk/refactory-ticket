import React from "react";

import Footer from "../Pages/Footer";
import Header from "../Pages/Header";
import Content from "../Pages/Content";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen mx-96 justify-between border border-gray-100">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
