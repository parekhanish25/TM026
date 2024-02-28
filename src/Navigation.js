import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./Components/Navbar/App";
import ThemeProtfolio from "./Components/Portfolio/Portfolio";
import ProtfolioPage from "./Components/Portfolio/landingPage";
function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ThemeProtfolio>
                <ProtfolioPage />
              </ThemeProtfolio>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navigation;
