import React from "react";
import { createRoot } from "react-dom/client";
import MainTemplate from "./MainTemplate";
import Teaser from "./Teaser";
import Footer from "./Footer";

const App = () => {
  return (
    <MainTemplate>
      <Teaser />
      <Footer />
    </MainTemplate>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
