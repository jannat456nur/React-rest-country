import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country)
    return (
        <div className="country">
            <h2> country name:{props.name}</h2>
            <h2>capital:{props.capital}</h2>
        </div>
    );
};

export default Country;