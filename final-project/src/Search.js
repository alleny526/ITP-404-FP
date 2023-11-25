import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function Search() {
  const myRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchBarFilled, setIsSearchBarFilled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = () => {
    if (isSearchBarFilled) {
      myRef.current.className = "invisible";
      setSearchTerm("");
      // Redirect to the results page with the search term as a parameter
      navigate("/animes/result", {
        state: { keyword: searchTerm },
      });
      window.location.reload(false);
    } else {
      myRef.current.className = "text-danger";
    }
  };

  useEffect(() => {
    setIsSearchBarFilled(searchTerm.trim() !== "");
  }, [searchTerm]);

  useEffect(() => {
    myRef.current.className = "invisible";
  }, [location]);

  return (
    <>
      <form
        className="d-flex"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <div ref={myRef} className="invisible">
          Please enter your search!
        </div>
        <label htmlFor="Search" className="form-label"></label>
        <input
          id="Search"
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </>
  );
}
