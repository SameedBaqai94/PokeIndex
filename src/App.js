import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import PokemonList from './component/PokemonList';
import NavBar from './component/NavBar';

function App() {
  const [listPokemon, SetListPokemon] = useState([]);

  const setData = (data) => {
    SetListPokemon(data)
  }

  const searchFilter = (value) => {
    SetListPokemon((currentList) => {
      return currentList.filter(item => item.name.includes(value))
    })
  }

  useEffect(() => {
    let fetched = true;

    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      const data = await response.json();

      if (fetched) {
        setData(data.results);
      }
    }

    fetchData();

    return () => {
      fetched = false;
    }
  }, [])

  return (
    <div className="App">
      <NavBar searchFilter={searchFilter} />
      <PokemonList pokemonList={listPokemon} />
    </div>
  );
}

export default App;
