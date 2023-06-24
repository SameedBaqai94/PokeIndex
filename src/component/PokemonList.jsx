import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PokemonCard from "./PokemonCard"


export default ({ pokemonList }) => {
    const list = pokemonList.map((pokemon) =>
        <Grid item xs={1} key={pokemon.name}>
            <PokemonCard pokemon={pokemon} />
        </Grid>
    )
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                {list}
            </Grid>
        </Box>
    )
}