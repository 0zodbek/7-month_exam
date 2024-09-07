import React from "react";
import Header from "./components/header";
import Home from "./pages/home";
import Details from "./pages/details";
import ErrorPage from "./pages/ErrorPage";
import MainLayout from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home></Home>
            </MainLayout>
          }
        />
        <Route
          path="/details"
          element={
            <MainLayout>
              <Details></Details>
            </MainLayout>
          }
        />
        <Route path="*" element={<ErrorPage></ErrorPage>} />
      </Routes>
    </div>
  );
}

export default App;
