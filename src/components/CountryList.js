import Country from "./Country";

const CountryList = ({ countries, isVisited, addVisitedCountry, removeVisitedCountry}) => {

    const mappedCountries = countries.map(country => {
        return <Country country={country} isVisited={isVisited} addVisitedCountry={addVisitedCountry} removeVisitedCountry={removeVisitedCountry} key={country.name.official} />;
    })

    return (  
        <>
            {mappedCountries}
        </>
    );
}
 
export default CountryList;