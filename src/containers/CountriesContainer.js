import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";
import "./CountriesContainer.css";

const CountriesContainers = () => {

    const [countries, setCountries] = useState(null);
    const [visitedCountries, setVisitedCountries] = useState(null);

    const loadCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    };

    useEffect(() => {
        loadCountries();
    }, [])

    useEffect((visitedCountry) => {
        setVisitedCountries([...visitedCountries, visitedCountry]);
    }, [visitedCountries]);

    return ( 
        <div className="country-lists">
            <div className="all-countries">
                <CountryList countries={countries}/>
            </div>

            <div className="visited-countries">
                <CountryList countries={visitedCountries}/>
            </div>
        </div>
    );
}
 
export default CountriesContainers;