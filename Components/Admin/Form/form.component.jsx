import React, { useState } from 'react';
import Link from 'next/link';
import fire from '../../../config/fire-config';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import SimpleMDE from 'react-simplemde-editor';

const useStyles = makeStyles(() => ({
    appBar: {
      position: 'fixed',
    },
    title: {
      textAlign: 'center',
      flex: 1,
    }
}));
  
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AdminForm = () => { 
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [description, setDescription] = useState('');  
    const [date, setDate] = useState('');  
    const [embed, setEmbed] = useState('');  
    const [transcript, setTranscript] = useState('');  
    const [meta, setMeta] = useState('');  

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleTitle = ({target}) => {
        const slugKebab = target.value.toLowerCase().replace(/[!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, '').replace(/ /g, '-');

        setTitle(target.value);
        setSlug(slugKebab);
    }

    const handleDescription = value => {
        setDescription(value)
    }

    const handleTranscript = value => {
        setTranscript(value)
    }

    const handleDate = ({target}) => {
        setDate(target.value)
    }

    const handleEmbed = ({target}) => {
        setEmbed(target.value)
    }

    const handleMeta = ({target}) => {
        setMeta(target.value)
    }
    
    const handleSubmit = (event) => { 
      event.preventDefault();  
      fire.firestore() 
        .collection('episodes')
        .doc(slug)
        .set({ 
            title: title,
            description: description,
            date: date,
            embed: embed,
            transcript: transcript,
            meta: meta,
            slug: slug
        });   
      setTitle('');
      setDescription('');
      setDate('');
      setEmbed('');
      setTranscript('');
      setMeta('');
      handleClose();
    } 

    return ( 
        <div>
            <div className="admin-header">
                <div className="container">
                    <Link href="/"><Button variant="outlined">Back to Site</Button></Link>
                    <h1>Admin: Podcast Episodes</h1>
                    <Button variant="contained" color="primary" onClick={handleClickOpen}>Add Episode</Button>
                </div>
            </div>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                Add Episode
                </Typography>
                <Button autoFocus color="inherit" onClick={handleSubmit}>
                Save
                </Button>
            </Toolbar>
            </AppBar>
                <form className="admin-form">
                    <div className="container">
                        <TextField
                            label="Title"
                            variant="outlined"
                            name="title"
                            placeholder="Title"
                            onChange={handleTitle}
                            className="title"
                        />
                        <TextField
                            variant="outlined"
                            type="date"
                            name="date"
                            className="date"
                            onChange={handleDate}
                        />
                        <TextField
                            label="Libsyn Embed Code"
                            variant="outlined"
                            type="embed"
                            name="embed"
                            onChange={handleEmbed}
                            fullWidth
                        />
                        <div className="ep-wysiwyg">
                            <h2>Description</h2>
                            <SimpleMDE onChange={handleDescription} />
                        </div>
                        <div className="ep-wysiwyg">
                            <h2>Transcript</h2>
                            <SimpleMDE onChange={handleTranscript} />
                        </div>
                        <TextField
                            label="Metadescription"
                            variant="outlined"
                            type="meta"
                            name="meta"
                            onChange={handleMeta}
                            fullWidth
                        />
                    </div> 
                </form>
            </Dialog>
        </div>
    ) 
  }
  
  export default AdminForm;