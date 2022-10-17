import React from 'react'
import './PokemonList.css'

function PokemonList(props) {
    console.log("props data:",props.data);
  return (
    <div className='pokemonList'>
     {
       props.data.map((value)=>{
        return(
            <div key={value}>{value}</div>
        )
        
       })
     }
    </div>
  )
}

export default PokemonList