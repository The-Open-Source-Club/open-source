import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import AboutUs from './pages/aboutus/aboutus.component';
import ContactUs from './pages/contactus/contactus.component';
import Projects from './pages/projects/projects.component';
import Navigation from './components/navigation/navigation.component';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/contactus' component={ContactUs} />
          <Route path='/projects' component={Projects} />
        </Switch>
    </div>
  );
}

export default App;
