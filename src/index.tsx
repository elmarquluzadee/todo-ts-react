import {createRoot} from 'react-dom/client';
import App from './App';

const root = document.querySelector("#root");

if(root) {
    const rootElement = createRoot(root);
    rootElement.render(<App/>);
}