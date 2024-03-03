import React from 'react';
// import ReactDom from 'react-dom';
// import ReactDom from "react-dom/client";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { StateContextProvider } from './contexts/StateContextProvider.jsx';
import './global.css';

const root = createRoot(document.getElementById("root"));
root.render(
  <StateContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StateContextProvider>
);


// ReactDom.render(
//   <StateContextProvider>
//     <Router>
//       <App />
//     </Router>
//   </StateContextProvider>,
//   document.getElementById('root'),
// );
