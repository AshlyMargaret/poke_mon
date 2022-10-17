import { useState ,useEffect } from 'react';
import './App.css';
import PokemonList from './Components/PokemonList/PokemonList';
import axios from 'axios';
import Pagination from './Components/Pagination/Pagination';

function App() {
  const[pokemon,setpokemon]= useState([]);
  const[currentPageurl,setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const[nextPageurl,setNextPageUrl] = useState();
  const[previousPageurl,setPreviousPageUrl] = useState();
  const[loading,setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true)
    let cancel
    axios.get(currentPageurl,{
      cancelToken:new axios.CancelToken(c=>cancel=c)
    }).then(res=>{
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPreviousPageUrl(res.data.previous)
      setpokemon(res.data.results.map(p=>p.name))
    })

    return()=>{
     cancel()
    }
  },[currentPageurl])

   function gotoNextPage(){
    setCurrentPageUrl(nextPageurl)
   }

   function gotoPreviousPage(){
    setCurrentPageUrl(previousPageurl)
  }

 if(loading) return "Loading..."
  return (
    <div className="app">
      <h2>Pokémon API</h2>
     <PokemonList data={pokemon}/>
     <Pagination 
      gotoNextPage={nextPageurl ? gotoNextPage : null}
      gotoPreviousPage={previousPageurl ? gotoPreviousPage : null}
    />
    </div>
  );
}

export default App;
