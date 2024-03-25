const Country = ({ country }) => {

    return (  
        <>
            <h2>{country.name.official}</h2>
            <p>{country.region}</p>
        </>
    );
}
 
export default Country;