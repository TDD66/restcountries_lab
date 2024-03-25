import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";

const CountriesContainers = () => {

    const [countries, setCountries] = useState(null);

    const loadCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    };

    useEffect(() => {
        loadCountries();
    }, [])

    useEffect(() => {
        console.log(countries);
    }, [countries]);

    return ( 
        <>
            <CountryList />
        </>
    );
}
 
export default CountriesContainers;