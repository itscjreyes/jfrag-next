import '../styles/global.scss';
import "easymde/dist/easymde.min.css";
import 'react-quill/dist/quill.snow.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}