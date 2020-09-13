import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import NavigationBar from './components/navigationBar'
import Home from './components/home/home'
import Services from './components/services/services'
import Footer from './components/footer'

function App() {
  return (
    <div id="content">
      <Router>
        <NavigationBar />
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
      </Router>
    </div>
  );
}

export default App;
