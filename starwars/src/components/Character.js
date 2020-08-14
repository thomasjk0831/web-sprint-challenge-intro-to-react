// Write your Character component here
// Write your Character component here
import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const StyledDiv = styled.div`
    border: 3px solid black;
    border-radius : 20px;
    margin: 5px 5px;
`

const StyledH3 = styled.h3`
    color: darkblue;
`


function Character(props){

    const { name, gender, height} = props
   

    
    
    

    return(
       <StyledDiv>
           <StyledH3>{name}</StyledH3>
           <p>gender: {gender}</p>
           <p>height: {height}</p>
           
          
       </StyledDiv>
    )
}

export default Character