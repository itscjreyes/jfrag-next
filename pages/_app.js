import '../styles/global.scss';
import "easymde/dist/easymde.min.css";
import 'react-quill/dist/quill.snow.css';
import Router from "next/router";
import withFBQ from "next-fbq";

function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default withFBQ("796485467802251", Router)(App);