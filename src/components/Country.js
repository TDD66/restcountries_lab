const Country = ({ country, addVisitedCountry }) => {

    const handleClick = () => {
        addVisitedCountry(country);
        console.log("EVENT");
    }

    return (  
        <>

            <h2>{country.name.official}</h2>
            <p>Capital City: {country.capital}</p>
            <p>Region: {country.region}</p>
            <img src = {country.flags.png} alt="" />
            <input id="check-box" type="checkbox" onInput={handleClick}/>
        </>
    );
}
 
export default Country;