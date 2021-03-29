import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      className="bg-info d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}>
      <div className="container text-white justify-content-center align-items-center d-flex ">
      <img src="./world.svg" alt="legend" className="m-4" style={{ height: "50vh" }} />
        <div>
          <h1 className="mb-4 text-warning ">Know Your Countries</h1>
          <h2>
          Get to know more About all the countries<br></br>
          Around the globe with Just few clicks!
          </h2>
            <Link
             to="/countries"
             className="btn btn-warning text-black m-1 align-items-center justify-content-center">
              SEE MORE
            </Link>
        </div>
        
      </div>
    </section>
  );
}

export default Home;
