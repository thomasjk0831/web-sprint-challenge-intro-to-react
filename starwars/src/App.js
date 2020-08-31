import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import './App.css';
import axios from 'axios'
import Character from './components/Character'

const StyledDiv = styled.div`
   font-family: 'Press Start 2P', cursive;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
      axios.get('https://swapi.dev/api/people/')
      .then((response)=>{
        setCharacters(response.data.results)
      })
      .catch((error)=>{
        console.log("There was an error: ", error)
      })
  },[])

  console.log(characters)

  return (
    <StyledDiv className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map((ch, index)=>{
          return <Character key={ch.index} name={ch.name} 
          gender={ch.gender} height={ch.height} />
        })
      }
    </StyledDiv>
  );
}

export default App;
