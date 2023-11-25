import { useLoaderData, Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import BookmarkButton from "../BookmarkButton";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from "react";
import { saveBookmark } from "../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Index() {
  const animes = useLoaderData();

  useEffect(() => {
    document.title = `Daily Anime | MyAnime`;
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>Daily Anime List</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Monday
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {animes[0].items.map((anime) => {
                    return (
                      <tr key={anime.id}>
                        <td>
                          <img src={anime.images.small} alt={anime.name}></img>
                        </td>
                        <td>
                          <Link to={`/animes/${anime.id}`}>{anime.name}</Link>
                        </td>
                        <td>
                          <BookmarkButton
                            data={anime}
                            onSubmit={(event) => {
                              event.preventDefault();
                              anime.personal_rating = 0.0;

                              saveBookmark(anime);

                              toast("Bookmark success!", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                              });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Tuesday
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {animes[1].items.map((anime) => {
                    return (
                      <tr key={anime.id}>
                        <td>
                          <img src={anime.images.small} alt={anime.name}></img>
                        </td>
                        <td>
                          <Link to={`/animes/${anime.id}`}>{anime.name}</Link>
                        </td>
                        <td>
                          <BookmarkButton
                            data={anime}
                            onSubmit={(event) => {
                              event.preventDefault();
                              anime.personal_rating = 0.0;

                              saveBookmark(anime);

                              toast("Bookmark success!", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                              });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Wednesday
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {animes[2].items.map((anime) => {
                    return (
                      <tr key={anime.id}>
                        <td>
                          <img src={anime.images.small} alt={anime.name}></img>
                        </td>
                        <td>
                          <Link to={`/animes/${anime.id}`}>{anime.name}</Link>
                        </td>
                        <td>
                          <BookmarkButton
                            data={anime}
                            onSubmit={(event) => {
                              event.preventDefault();
                              anime.personal_rating = 0.0;

                              saveBookmark(anime);

                              toast("Bookmark success!", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                              });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Thursday
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {animes[3].items.map((anime) => {
                    return (
                      <tr key={anime.id}>
                        <td>
                          <img src={anime.images.small} alt={anime.name}></img>
                        </td>
                        <td>
                          <Link to={`/animes/${anime.id}`}>{anime.name}</Link>
                        </td>
                        <td>
                          <BookmarkButton
                            data={anime}
                            onSubmit={(event) => {
                              event.preventDefault();
                              anime.personal_rating = 0.0;

                              saveBookmark(anime);

                              toast("Bookmark success!", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                              });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Friday
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {animes[4].items.map((anime) => {
                    return (
                      <tr key={anime.id}>
                        <td>
                          <img src={anime.images.small} alt={anime.name}></img>
                        </td>
                        <td>
                          <Link to={`/animes/${anime.id}`}>{anime.name}</Link>
                        </td>
                        <td>
                          <BookmarkButton
                            data={anime}
                            onSubmit={(event) => {
                              event.preventDefault();
                              anime.personal_rating = 0.0;

                              saveBookmark(anime);

                              toast("Bookmark success!", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                              });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Saturday
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {animes[5].items.map((anime) => {
                    return (
                      <tr key={anime.id}>
                        <td>
                          <img src={anime.images.small} alt={anime.name}></img>
                        </td>
                        <td>
                          <Link to={`/animes/${anime.id}`}>{anime.name}</Link>
                        </td>
                        <td>
                          <BookmarkButton
                            data={anime}
                            onSubmit={(event) => {
                              event.preventDefault();
                              anime.personal_rating = 0.0;

                              saveBookmark(anime);

                              toast("Bookmark success!", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                              });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              Sunday
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {animes[6].items.map((anime) => {
                    return (
                      <tr key={anime.id}>
                        <td>
                          <img src={anime.images.small} alt={anime.name}></img>
                        </td>
                        <td>
                          <Link to={`/animes/${anime.id}`}>{anime.name}</Link>
                        </td>
                        <td>
                          <BookmarkButton
                            data={anime}
                            onSubmit={(event) => {
                              event.preventDefault();
                              anime.personal_rating = 0.0;

                              saveBookmark(anime);

                              toast("Bookmark success!", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                              });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
