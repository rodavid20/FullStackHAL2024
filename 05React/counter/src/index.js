import React from 'react';
import {createRoot} from 'react-dom/client'
import App from './App.js'

const root = createRoot(document.getElementById('root'));
// const element  = <h1>Hello World</h1>
// console.log(root);
root.render(
    <App />
);
