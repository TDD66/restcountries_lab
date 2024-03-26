import { useState } from "react";

const Country = ({ country, addVisitedCountry, removeVisitedCountry, isVisited }) => {

    const [isDetailedView, setIsDetailedView] = useState(false);

    const handleCheck = () => {
        if(!isVisited){
            addVisitedCountry(country);
        }
        else{
            removeVisitedCountry(country);
        }
        console.log("EVENT");
    }

    const handleClick = () => {
        setIsDetailedView(prev => !prev);
    }

    return (  
        <>
            <h2>{country.name.official}</h2>
            <img src = {country.flags.png} alt="" />
            <input id="check-box" type="checkbox" onClick={handleCheck}/>
            
            <button onClick={handleClick}>Show more...</button>
            { isDetailedView ? 
                <>
                    <p>Capital City: {country.capital}</p>
                    <p>Region: {country.region}</p>
                    <p>Subregion: {country.subregion}</p>
                </>
                :
                <></>
            }
        </>
    );
}
 
export default Country;