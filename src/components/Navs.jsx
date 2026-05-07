import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import Popup from "./Popup";

export default function Navs() {
  const [Isopen, setOpen] = useState(false);

  // auto close nav when click
  const handleCloseNav = () => {
    setOpen(false);
  };

  return (
    <nav className="navlist sticky top-0 z-50 bg-white border-b border-gray-200">
      <div
        className={`nav-content-block bg-white flex items-center justify-between px-10 p-3 ${Isopen ? "open" : ""}`}
      >
        <div className="text-logo">
          <a href="#top">
            <h1 className="logo font-bold text-blue-900">Company</h1>
          </a>
        </div>
        <div
          className={`h-btn hamburger ${Isopen ? "open" : ""}`}
          style={{ width: "24px", height: "24px" }}
          onClick={() => setOpen(!Isopen)}
        >
          {!Isopen && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}

          {Isopen && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </>
          )}
        </div>
        <div className="navli items-center justify-center gap-5 mx-16 py-5 hidden md:flex">
          <a href="#top" className="hover:text-[#345be0]">
            Home
          </a>
          <a href="#flashsale" className="hover:text-[#345be0]">
            Flash Sale
          </a>
          <a href="#cards" className="hover:text-[#345be0]">
            HOT Deals
          </a>
          <a href="#contact" className="hover:text-[#345be0]">
            Contact Us
          </a>
        </div>
        <div className="member-btn-div hidden md:flex justify-center items-center">
          <Popup />
        </div>
      </div>
      <div
        className={`mobile-menu  duration-300 ease-in-out ${Isopen ? "open" : ""}`}
      >
        <a href="#top" onClick={handleCloseNav}>
          Home
        </a>
        <a href="#flashsale" onClick={handleCloseNav}>
          Flash Sale
        </a>
        <a href="#cards" onClick={handleCloseNav}>
          HOT Deals
        </a>
        <a href="#contact" onClick={handleCloseNav}>
          Contact Us
        </a>
        <div onClick={handleCloseNav}>
          <Popup />
        </div>
      </div>
    </nav>
  );
}
