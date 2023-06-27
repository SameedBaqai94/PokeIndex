import {
    Dialog,
    DialogContent,
    Typography,
    Card,
    CardMedia,
    CardContent
} from "@mui/material";
import ProgressBar from "./ProgressBar";

export default ({ pokemon, spirit, stats, isopen, type, closedialog }) => {

    const typesColor = {
        fire: "rgba(255, 69, 0, 0.5)",
        grass: "rgba(124, 252, 0, 0.5)",
        water: "rgba(131, 200, 242, 0.5)",
        electric: "rgba(255, 255, 0, 0.5)",
        poison: "rgba(128, 0, 128, 0.5)",
        normal: "rgba(181, 101, 29,0.5)",
        flying: "rgba(200, 162, 200,0.5)",
        dragon: "rgba(200, 162, 200,0.5)",
        ghost: "rgba(200, 162, 200,0.5)",
        ice: "rgba(189, 230, 239,0.5)",
        psychic: "rgba(255, 182, 193,0.5)",
        ground: "rgba(165, 42, 42,0.5)",
        rock: "rgba(165, 42, 42,0.5)",
        fairy: "rgba(255, 182, 193,0.5)"
    }

    const statsCard = () => {
        const typoGraphyStats = [];
        stats.map((element, index) => {
            typoGraphyStats.push(
                <ProgressBar key={index} stats={element} />
            )

        })
        return typoGraphyStats;
    }

    const types = () => {
        const typeList = [];
        type.map((t) => {
            typeList.push(
                <Typography sx={{ color: "white" }}>
                    {t.name}
                </Typography>
            )
        })
        return typeList;
    }

    const typeColor = () => {
        let typeListColor = '';
        type.forEach((t) => {
            if (t.name in typesColor) {
                typeListColor = typesColor[t.name];
            }
        })
        return typeListColor;
    }


    return (
        <Dialog open={isopen} onClose={closedialog} PaperProps={{ sx: { backgroundColor: 'rgba(131, 200, 242, 0.5)' } }}>
            <DialogContent>
                <Typography variant="h4" sx={{ color: "white" }}>
                    {pokemon.name}
                </Typography>
                <Card sx={{
                    width: 400, height: 700, boxShadow: 1,
                    borderRadius: 2,
                    backgroundColor: typeColor()
                }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={spirit}
                        title={pokemon.name}
                    />
                    <CardContent sx={{}}>
                        {types()}
                    </CardContent>
                    <CardContent sx={{}}>
                        {statsCard()}
                    </CardContent>
                </Card>
            </DialogContent>

        </Dialog>
    )
}