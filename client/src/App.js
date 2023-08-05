import React from "react";
import "./style.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import JobForm from "./components/JobForm/JobForm";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/jobform" element={<JobForm />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
