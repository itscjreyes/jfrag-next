import { useState } from 'react'; 
import fire from '../config/fire-config';
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Login = () => { 
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [notify, setNotification] = useState(''); 
    const router = useRouter();  
    
    const handleLogin = (e) => { 
        e.preventDefault();    
        fire.auth() 
        .signInWithEmailAndPassword(username, password) 
        .then(()=>{
            router.push("/admin")
            setUsername('') 
            setPassword('') 
        })
        .catch((err) => { 
            console.log(err.code, err.message) 
            setNotification(err.message)
        })    
    }  

    const handleUsername = ({target}) => {
        setNotification('');
        setUsername(target.value);
    }

    const handlePassword = ({target}) => {
        setNotification('');
        setPassword(target.value);
    }

    return ( 
        <div className="login-page">
            <div className="container">
                <h1>Admin Login</h1> 
                <form onSubmit={handleLogin}> 
                    <TextField
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="Email"
                        onChange={handleUsername}
                        fullWidth
                    />
                    <TextField
                        type="password"
                        label="Password"
                        name="password"
                        placeholder="Password"
                        onChange={handlePassword}
                        fullWidth
                    />
                    <p>{notify}</p>
                    <Button variant="contained" color="primary" type="submit">Login</Button>
                </form> 
            </div>
        </div> 
    ) 
}

export default Login;