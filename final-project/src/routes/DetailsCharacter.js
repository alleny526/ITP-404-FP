import { useLoaderData } from "react-router-dom";

export default function DetailsCharacter() {
  const characterDetails = useLoaderData();
  return (
    <>
      <h1>{characterDetails.name}</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-3">
            <img
              className="img-fluid"
              src={characterDetails.images.grid}
              alt={characterDetails.name}
            ></img>
          </div>
          <div className="col-sm-9">
            <div className="row">
              <h5>Summary</h5>
              {characterDetails.summary}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
