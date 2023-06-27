import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Cards from './Cards';

export default ({ pokemon }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [stats, setStats] = useState([],);
    const [gifUrl, setGifUrl] = useState('');
    const [types, setTypes] = useState([]);

    const urlId = pokemon.url.match(/\/(\d+)\//)[1];
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${urlId}.png`
    const openDialog = () => {
        setIsOpen(true);
    }
    const closeDialog = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        let fetched = true;

        const fetchData = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            const data = await response.json();
            const spriteUrl = data.sprites?.versions['generation-v']['black-white'].animated.front_default;

            const pokemonType = data.types.map((type) => ({
                name: type.type.name,
                //icon: type.type.url
            }));
            if (fetched) {
                setStats(data.stats);
                setGifUrl(spriteUrl);
                setTypes(pokemonType);
            }
        }

        fetchData();
        return () => fetched = false;
    }, [])

    return (
        <>
            <Card sx={{ maxWidth: 400 }} onClick={openDialog}>
                <CardActionArea>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={gifUrl}
                        title={pokemon.name}
                    />
                    <CardContent>
                        <Typography>
                            {pokemon.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Cards pokemon={pokemon} spirit={url} stats={stats} isopen={isOpen} type={types} closedialog={closeDialog} />
        </>
    )

}