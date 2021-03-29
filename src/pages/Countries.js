import useCountries from "../hooks/useCountries";
import Card from "../components/Card";
import { useState } from "react";

function Countries() {
  const url = "https://restcountries.eu/rest/v2/all";
  const { countries, isPending, error } = useCountries(url);
  
  const [search, setSearch] = useState("");
  // const [filteredCountries, setFilteredCountries] = useState([]);

  // useEffect(()=>{ setFilteredCountries(countries.filter(country =>{
  //   return country.name.toLowerCase().includes(search.toLowerCase())
  // })

  return (
    <section className="mt-2 bg-info">
      <div>
        <h1 className="d-flex align-items-center justify-content-center p-3">
          List Of Countries
        </h1>
        <div className="m-3 border-0 bg-transparent text-center">
          <input
            type="text"
            placeholder="Search Country"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn-warning text-black-50 border-bottom-0 text-dark"
            onClick={(e) => setSearch(e.target.value)}
          >
            SEARCH
          </button>
        </div>
      </div>
      <div className="row text-center align-items-center justify-content-center">
        {isPending && <div>loading</div>}
        {error && <div>oops!! something went wrong</div>}
        {countries &&
          countries.map((country) => (
            <Card
              name={country.name}
              img={country.flag}
              population={country.population}
              capital={country.capital}
              region={country.region}
              subregion={country.subregion}

            />
          ))}
      </div>
    </section>
  );
}

export default Countries;
