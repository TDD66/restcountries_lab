import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";
import "./CountriesContainer.css";

const CountriesContainers = () => {

    const [countries, setCountries] = useState(null);
    const [visitedCountries, setVisitedCountries] = useState(null);
    const [searchQuery, setSearchQuery] = useState("")

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

    const handleSearch = (evt) => {
        setSearchQuery(evt.target.value)
    }

    return ( 
        <>
            <header>
                <h1>Visited Countries List</h1>
            </header>
            <main>
                <div className="country-lists">
                    <div className="all-countries">
                        <h2>All Countries</h2>
                        <form>
                            <label>Filter countries:</label>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                        </form>
                        { countries ?
                        <CountryList countries={countries} searchQuery={searchQuery} isVisited={false} addVisitedCountry={addVisitedCountry} removeVisitedCountry={removeVisitedCountry}/>
                        : <h3>Loading</h3>
                        }
                    </div>

                    <div className="visited-countries">
                        <h2>Visited Countries</h2>
                        { visitedCountries ? 
                        <CountryList countries={visitedCountries} searchQuery={searchQuery} isVisited={true} addVisitedCountry={addVisitedCountry} removeVisitedCountry={removeVisitedCountry}/>
                        : <h3>No visited countries</h3>
                        }
                    </div>
                </div>
                </main>
        </>
    );
}
 
export default CountriesContainers;