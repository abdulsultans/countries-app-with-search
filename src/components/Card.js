import { Link } from "react-router-dom";

function Card({ name, img, population, region, capital, subregion }) {
  return (
    <div className="card m-5 justify-content-center align-items-center">
      <img
        src={img}
        alt=""
        className="card-img-top img-fluid"
        style={{ height: "10rem", width: "18rem" }}
      />
      <div className="card-body">
        <Link to={`/details/${name}`}>
          <h4>{name}</h4>
          <h5>{capital}</h5>
          <h5>{region}</h5>
          <h5>{subregion}</h5>
          <h5>{population}</h5>
          <h5 className="btn btn-primary">READ MORE</h5>
        </Link>
        
      </div>
    </div>
  );
}

export default Card;
