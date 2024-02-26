import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom";
import { render } from "react-dom";
import App from './App';
import './global.css';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
document.getElementById('root')
);

// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="root" />);

//     <createRoot>
//         <App />
//     </createRoot>,
// document.getElementById('root')

// function AppWithCallbackAfterRender() {
    // useEffect(() => {
    //   console.log('rendered');
    // });
  
    // return <App tab="home" />
//   }
//   const container = document.getElementById('app');
//   const root = createRoot(container);
//   root.render(<AppWithCallbackAfterRender />);

