import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const [results, setResults] = useState(null);
  useEffect(() => {
    fetch(`https://api.bgm.tv/search/subject/${location.state.keyword}`, {
      method: "GET",
    }).then((response) => {
      return response.json().then((data) => {
        setResults(data);
      });
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    document.title = `"${location.state.keyword}" Search Results | MyAnime`;
    // eslint-disable-next-line
  }, []);

  if (!results) {
    return (
      <>
        <h1>Search Result</h1>
        <div>No results found!</div>
      </>
    );
  }
  return (
    <>
      <h1>Search Result</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {results.list.map((anime) => {
            return (
              <tr key={anime.id}>
                <td>
                  <img src={anime.images.small} alt={anime.name}></img>
                </td>
                <td>
                  <Link to={`/animes/${anime.id}`}>{anime.name}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
