//Router
import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// import Header from './Components/Header/Header';
import ScrollToTop from './Components/ScrolToTop';
// import Intro from './Components/Intro/Intro';
// import Articles from './Components/Articles/Articles';
// import About from './Components/About/About';
import MainPage from './Pages/Main';
import ArticleBody from './Pages/ArticleBody';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="App">
          {/* <Header/> */}
          {/* <Intro/>
          <Articles/>
          <About/> */}
          <>
            <Switch>
              <Route path="/article/:name" component={ArticleBody}/>
              <Route path = "/" component= {MainPage}/>
            </Switch>
          </>
        </div>
      </Router>
    </>
  );
}

export default App;
