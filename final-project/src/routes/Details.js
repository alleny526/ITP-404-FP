import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function Details() {
  const animeDetails = useLoaderData();
  const [characters, setCharacters] = useState(null);
  useEffect(() => {
    fetch(`https://api.bgm.tv/v0/subjects/${animeDetails.id}/characters`, {
      method: "GET",
    }).then((response) => {
      return response.json().then((data) => {
        setCharacters(data);
      });
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    document.title = `${animeDetails.name} Details | MyAnime`;
    // eslint-disable-next-line
  }, []);

  if (!characters) {
    return <div />;
  }

  return (
    <>
      <h1>{animeDetails.name}</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-3">
            <img
              className="img-fluid"
              src={animeDetails.images.common}
              alt={animeDetails.name}
            ></img>
          </div>
          <div className="col-sm-9">
            <div className="row">
              <h5>Summary</h5>
              {animeDetails.summary}
            </div>
            <div className="row">
              <h5>Characters</h5>
              {characters.map((character) => {
                return (
                  <div className="col-sm-3 mb-3 mb-sm-0" key={character.id}>
                    <div className="card">
                      <img
                        src={character.images.grid}
                        className="card-img-top img-fluid"
                        alt={character.name}
                      ></img>
                      <div className="card-body">
                        <h5 className="card-title">{}</h5>
                        <p className="card-text">{character.name}</p>
                        <Link to={`/characters/${character.id}`}>
                          Go to {character.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
