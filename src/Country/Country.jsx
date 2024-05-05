import "./Country.css";
import { useState, useEffect } from "react";
import axios from "axios";
const Country = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(res.data);
      } catch (err) {
        console.error("Error fetching", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="containerstyles">
      {countries.map((country) => {
        return (
          <div className="cards">
            <img
              src={country.flags.png}
              alt={`${country.name.common}  image`}
              className="imagestyles"
            />
            <h2>{country.name.common}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default Country;
