import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Place from './Place';
import "./Search.css"

function Search() {
  const location = useLocation();

  const [places, setPlaces] = useState([]);

  useEffect(async () => {

    const token = localStorage.getItem('token');
    const response = await fetch("http://localhost:8080/place/all", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        city: location.state.city,
        state: location.state.State,
        category: "",
      })
    })

    if (response.status === 200) {
      const json = await response.json();
      setPlaces(json);
      console.log(json);
    }
  }, [])

  return(
    <>
      <div>
        {places.map((element) => {
          return (
            <div key={element.placeName}>
            <Place placeName={element.placeName} discription={element.discription} address={element.address} image={element.image}/>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Search