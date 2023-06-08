import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import  Home  from './views/Home.js';
import Articles from './views/ArticleDisplay';
import { Route, Routes, HashRouter  } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import styles from './App.css'
import './App.scss';

function App() {
  return (
    <body className = {styles.body}>
    <Helmet>
        <title>Owleyes-Cyclopedia</title>
        <meta name="description" content="A website for all things Owl-eyes." />
      </Helmet>
        <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/articles" element={<Articles />} />
            </Routes>
        </body>
  );
}

export default App;
