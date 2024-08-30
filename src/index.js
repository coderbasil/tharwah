import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import express from "express"



const root = ReactDOM.createRoot(document.getElementById('root'));
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', '../public/index.html'));
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);