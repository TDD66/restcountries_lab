import Country from "./Country";

const CountryList = ({ countries }) => {

    const mappedCountries = countries.map(country => {
        return <Country country={country} key={country.name.official} />
    })

    return (  
        <>
            {mappedCountries}
        </>
    );
}
 
export default CountryList;