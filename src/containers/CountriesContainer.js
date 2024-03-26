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

        removeCountryFromMainList(visitedCountry);

        if(visitedCountries == null){
            setVisitedCountries([visitedCountry]);
        }
        else{
        setVisitedCountries([...visitedCountries, visitedCountry]);
        }
    }

    const removeCountryFromMainList = (countryToRemove) => {
        const indexOfCountry = countries.indexOf(countryToRemove);
        countries.splice(indexOfCountry, 1);
        setCountries([...countries]);
    }

    const removeVisitedCountry = (countryToRemove) => {
        const indexOfCountry = visitedCountries.indexOf(countryToRemove);
        visitedCountries.splice(indexOfCountry, 1);
        setVisitedCountries([...visitedCountries]);
        setCountries([...countries, countryToRemove]);  
    }



    return ( 
        <div className="country-lists">
            <div className="all-countries">
                <h1>All Countries</h1>
                {/* <form>
                    <label>Filter countries:</label>
                    <input
                    type="text"
                    />
                </form> */}
                { countries ?
                <CountryList countries={countries} isVisited={false} addVisitedCountry={addVisitedCountry} removeVisitedCountry={removeVisitedCountry}/>
                : <h2>Loading</h2>
                }
            </div>

            <div className="visited-countries">
                <h1>Visited Countries</h1>
                { visitedCountries ? 
                <CountryList countries={visitedCountries} isVisited={true} addVisitedCountry={addVisitedCountry} removeVisitedCountry={removeVisitedCountry}/>
                : <h2>No visited countries</h2>
                }
            </div>
        </div>
    );
}
 
export default CountriesContainers;