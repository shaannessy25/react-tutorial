import { HashRouter as Router, Route } from 'react-router-dom'
import React from 'react';
import About from './About/About'
import './App.css';
import Title from './Title/Title';
import POPOSList from './POPOSList'
import Footer from './Footer/Footer'
import POPOSDetails from './POPOSDetails'

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path='/' component={POPOSList}/>
        <Route path='/about' component={About}/>
        <Route path='/details/:id' component={POPOSDetails}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
