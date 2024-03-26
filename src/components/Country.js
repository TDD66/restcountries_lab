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

    const languageKeys = Object.keys(country.languages);

    return (  
        <>
            <h2>{country.name.official}</h2>
            <img src = {country.flags.png} alt="" />
            <p>Capital City: {country.capital}</p>
            <p>Region: {country.region}</p>
            <input id="check-box" type="checkbox" onClick={handleCheck}/>
            
            <button onClick={handleClick}>Show more...</button>
            { isDetailedView ? 
                <>
                    <p>Subregion: {country.subregion}</p>
                    {<ul>
                        {languageKeys.map((key) => <li key={key}>{country.languages.key}</li>)}
                    </ul>}

                </>
                :
                <></>
            }
        </>
    );
}
 
export default Country;