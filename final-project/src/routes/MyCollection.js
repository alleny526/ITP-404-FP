import React, { useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import DeleteButton from "../DeleteButton";
import PersonalRating from "../PersonalRating";
import { deleteBookmark } from "../api";

export default function MyCollection() {
  const collections = useLoaderData();

  useEffect(() => {
    document.title = `My Collection | MyAnime`;
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>My Collection</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Personal Rating</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {collections.map((anime) => {
            return (
              <tr key={anime.id}>
                <td>
                  <img src={anime.images.small} alt={anime.name}></img>
                </td>
                <td>
                  <Link to={`/animes/${anime.id}`}>{anime.name}</Link>
                </td>
                <td>
                  <div>Current rating: {anime.personal_rating}</div>
                  <PersonalRating id={anime.id} />
                </td>
                <td>
                  <DeleteButton
                    id={anime.id}
                    onSubmit={(event) => {
                      deleteBookmark(anime.id);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
