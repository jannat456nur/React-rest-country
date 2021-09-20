import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Person from './components/Component/Person';

function App() {
  return (
    <div className="App">
      {/* <Countries></Countries>
      <Country></Country> */}
      {/* <Countries></Countries> */}
      <Person></Person>
    </div>
  );
}

function Countries() {
  const [countriesa, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h1>Return the countries</h1>
      <h5>Countries available:{countriesa.length}</h5>
      {
        countriesa.map(country => <Country name={country.name} capital={country.capital}></Country>)
      }
    </div>
  )
}

function Country(props) {
  return (
    <div>
      <h2>Name:{props.name}</h2>
      <h2>Capital:{props.capital}</h2>
    </div>
  )
}








export default App;
