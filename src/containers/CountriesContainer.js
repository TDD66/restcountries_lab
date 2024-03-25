import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";
import "./CountriesContainer.css";

const CountriesContainers = () => {

    const [countries, setCountries] = useState(null);
    const [visitedCountries, setVisitedCountries] = useState();

    const loadCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    };

    useEffect(() => {
        loadCountries();
    }, [])


    useEffect((visitedCountry) => {
        if(visitedCountries){
            setVisitedCountries([...visitedCountries, visitedCountry]);
        }
    }, [visitedCountries]);

    return ( 
        <div className="country-lists">
            <div className="all-countries">
                { countries ?
                <CountryList countries={countries}/>
                : <h2>Loading</h2>
                }
            </div>

            <div className="visited-countries">
                { visitedCountries ? 
                <CountryList countries={visitedCountries}/>
                : <h2>No visited countries</h2>
                }
            </div>
        </div>
    );
}
 
export default CountriesContainers;