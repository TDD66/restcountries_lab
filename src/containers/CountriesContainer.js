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
        setVisitedCountries();
    };

    useEffect(() => {
        loadCountries();
    }, [])

    const addVisitedCountry = (visitedCountry) => {
        if(visitedCountries == null){
            setVisitedCountries([visitedCountry]);
        }
        else{
        setVisitedCountries([...visitedCountries, visitedCountry]);
        }
    }

    const removeVisitedCountry = (countryToRemove) => {
        const indexOfCountry = visitedCountries.indexOf(countryToRemove);
        visitedCountries.splice(indexOfCountry, 1);
        setVisitedCountries([...visitedCountries]);    
    }

    return ( 
        <div className="country-lists">
            <div className="all-countries">
                <h1>All Countries</h1>
                { countries ?
                <CountryList countries={countries} addVisitedCountry={addVisitedCountry}/>
                : <h2>Loading</h2>
                }
            </div>

            <div className="visited-countries">
                <h1>Visited Countries</h1>
                { visitedCountries ? 
                <CountryList countries={visitedCountries} removeVisitedCountry={removeVisitedCountry}/>
                : <h2>No visited countries</h2>
                }
            </div>
        </div>
    );
}
 
export default CountriesContainers;