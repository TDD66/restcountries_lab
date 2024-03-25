import Country from "./Country";

const CountryList = ({ countries, isVisited, addVisitedCountry, removeVisitedCountry}) => {

    const mappedCountries = countries.map(country => {
        return <Country country={country} addVisitedCountry={addVisitedCountry} isVisited={isVisited} removeVisitedCountry={removeVisitedCountry} key={country.name.official} />;
    })

    return (  
        <>
            {mappedCountries}
        </>
    );
}
 
export default CountryList;