import Country from "./Country";

const CountryList = ({ countries, addVisitedCountry, removeVisitedCountry}) => {

    const mappedCountries = countries.map(country => {
        return <Country country={country} addVisitedCountry={addVisitedCountry} key={country.name.official} />;
    })

    return (  
        <>
            {mappedCountries}
        </>
    );
}
 
export default CountryList;