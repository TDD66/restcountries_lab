import Country from "./Country";

const CountryList = ({ countries, searchQuery, isVisited, addVisitedCountry, removeVisitedCountry}) => {

    const filteredCountries = countries.filter(country => {
        return (country.name.common.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.name.official.toLowerCase().includes(searchQuery.toLowerCase()))
    });

    const mappedCountries = filteredCountries.map(country => {
        return <Country country={country} isVisited={isVisited} addVisitedCountry={addVisitedCountry} removeVisitedCountry={removeVisitedCountry} key={country.name.official} />;
    });

    return (  
        <>
            {mappedCountries}
        </>
    );
}
 
export default CountryList;