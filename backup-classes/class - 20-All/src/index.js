import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
const root = createRoot(document.getElementById("root"))
root.render
    (
        <App />
    )