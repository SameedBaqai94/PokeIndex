import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
    Button,
} from "@mui/material";

export default ({ isopen, closedialog }) => {
    return (
        <Dialog open={isopen} onClose={closedialog}>
            <DialogTitle>
                {" "}
                <Typography variant="h4">Lorem ipsum dolor sit amet consectetuer</Typography>
            </DialogTitle>
            <DialogContent>
                <Typography variant="h6">
                    Are you sure you want to delete this user?
                </Typography>
                <Typography variant="subtitle2">
                    You can't undo this operation
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button variant="contained">No</Button>
                <Button variant="contained" color="error">
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    )
}