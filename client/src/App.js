import React, { useState, useEffect } from 'react';
import HouseCard from './components/HouseCard';
import './App.css'

const App = () => {

  const [backendData, setBackendData] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const handleSearch = (e) => {
    setSearchVal(e.target.value);
    fetch('/api/' + e.target.value)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBackendData(data)
      });
  }

  return <div>
    <div className='search-bar'>
      <label style={{ marginRight: '10px' }}>Search</label>
      <input onChange={handleSearch} />
    </div>
    {(searchVal.length === 0) ? (
      <p className="default-message">Search by Address or Zip Code</p>
    ) : (backendData.length === 0) ? (
      <p className="default-message">No results found</p>
    ) : ((
      backendData.map((house, i) => (
        <HouseCard key={i} props={house} />
      ))
    ))
    }
  </div>
}

export default App