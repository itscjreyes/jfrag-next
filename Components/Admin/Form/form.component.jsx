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

const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      textAlign: 'center',
      flex: 1,
    },
    icon: {
        color: 'white'
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
    const [content, setContent] = useState('');  

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleTitle = ({target}) => {
        const slugKebab = target.value.toLowerCase().replace(/[!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, '').replace(/ /g, '-');

        setTitle(target.value)
        setSlug(slugKebab)
    }
    
    const handleSubmit = (event) => { 
      event.preventDefault();  
      fire.firestore() 
        .collection('episodes')
        .doc(slug)
        .set({ 
            title: title,
            content: content, 
            slug: slug
        });  
      console.log({
        "title": title, 
        "content": content,
        "slug": slug
      });    
      setTitle('');
      setContent('');
      handleClose();
    } 

    return ( 
        <div className="admin-form">
            <AppBar className={classes.appBar}>
            <Toolbar>
                <Link href="/"><a className='home-btn'><HomeIcon/></a></Link>
                <Typography variant="h6" className={classes.title}>
                Admin: Podcast Episodes
                </Typography>
                <Button variant="contained" onClick={handleClickOpen}>Add Episode</Button>
            </Toolbar>
            </AppBar>
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
                <form> 
                    <div> 
                        Title<br /> 
                        <input type="text" value={title}  
                        onChange={handleTitle} /> 
                    </div> 
                    <div> 
                        Content<br /> 
                        <textarea value={content}  
                        onChange={({target}) => setContent(target.value)} /> 
                    </div>
                </form>
            </Dialog>
        </div>
    ) 
  }
  
  export default AdminForm;