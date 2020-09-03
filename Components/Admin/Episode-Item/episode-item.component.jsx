import fire from '../../../config/fire-config';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AdminForm from '../Form/admin-form.component';

const EpisodeItem = props => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        fire.firestore() 
        .collection('episodes')
        .doc(props.id)
        .delete();

        handleClose();
    };

    return (
        <div className="episode-item">
            <div className="container">
                <div className="content-wrapper">
                    <p>{props.title}</p>
                    <div className="actions">
                        <AdminForm
                            text="Edit"
                            title={props.title}
                            slug={props.id}
                            description={props.description}
                            date={props.date}
                            meta={props.meta}
                            embed={props.embed}
                            transcript={props.transcript}
                            apple={props.apple}
                            google={props.google}
                            spotify={props.spotify}
                            stitcher={props.stitcher}
                            type="update"
                        />
                        <Button onClick={handleClickOpen}>Delete</Button>
                    </div>
                </div>
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete the following episode?"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {props.title}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleDelete} variant="contained" color="primary" autoFocus>
                    Delete
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default EpisodeItem;