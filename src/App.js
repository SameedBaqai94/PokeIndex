import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import PokemonList from './component/PokemonList';
import NavBar from './component/NavBar';

function App() {
  const [listPokemon, setListPokemon] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const setData = (data) => {
    setListPokemon(data);
    setFilteredList(data);
  }

  const searchFilter = (value) => {
    let cloneList = [...listPokemon];

    console.log(value);
    if (value === "") {
      setFilteredList(listPokemon);
    } else {
      let check = cloneList.filter((e) => e.name.includes(value));
      console.log(check);
      setFilteredList(check);
    }

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
      <PokemonList pokemonList={filteredList} />
    </div>
  );
}

export default App;
