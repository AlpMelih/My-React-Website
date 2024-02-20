import React, { useState, useEffect } from 'react'

function countriesApi() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(res => setCountries(res));

    }, []);
    const assianCountries = countries.filter(country => country.region === "Asia");
    const africaCountries = countries.filter(country => country.region === "Africa")
    const oceaniaCountries = countries.filter(country => country.region === "Oceania")
    const southAmericaCountries = countries.filter(country => country.continents.includes("South America"))
    const europeCountries = countries.filter(country => country.region === "Europe")
    const northAmericaCountries = countries.filter(country => country.continents.includes("North America"))



    return (
        {
            assianCountries,
            africaCountries,
            oceaniaCountries,
            southAmericaCountries,
            europeCountries,
            northAmericaCountries

        }
    )
}

export default countriesApi
