import React, { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './components/'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>rest Countries:{countries.length}</h1>
            {
                countries.map(country => <Country
                    // country={country}
                    name={country.name}
                    capital={country.capital}
                ></Country>)
            }
        </div>
    );
};

export default Countries;