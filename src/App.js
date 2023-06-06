import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import  { Home }  from './views/Home';
import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import { RedirectCheckProvider } from './views/RedirectCheck';
import styles from './App.css'

function App() {
  return (
    <body className = {styles.body}>
    <Helmet>
        <title>ZippyPrints</title>
        <meta name="description" content="A fast, easy to use, and reliable way for printing custom designs through printers near you!" />
      </Helmet>
        <NavBar />
        <BrowserRouter>
          <RedirectCheckProvider>
            <Routes>
              <Route exact path="/Home" element={<Home />} />
              
            </Routes>
          </RedirectCheckProvider>
        </BrowserRouter>
        </body>
  );
}

export default App;
