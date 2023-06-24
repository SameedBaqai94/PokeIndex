import { Button, Dialog, DialogContent, Card, CardActionArea, CardMedia, CardContent, Typography, DialogTitle, DialogActions } from '@mui/material';
import { useState } from 'react';

export default ({ pokemon }) => {

    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => {
        setIsOpen(true);
    }
    const closeDialog = () => {
        setIsOpen(false);
    }

    const urlId = pokemon.url.match(/\/(\d+)\//)[1];
    return (
        <>
            <Card sx={{ maxWidth: 400 }} onClick={openDialog}>
                <CardActionArea>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${urlId}.png`}
                        title={pokemon.name}
                    />
                    <CardContent>
                        <Typography>
                            {pokemon.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Dialog open={isOpen} onClose={closeDialog}>
                <DialogContent>
                    <Typography variant="h6">
                        Pokemon
                    </Typography>

                </DialogContent>

            </Dialog>
        </>
    )

}