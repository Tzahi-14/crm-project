import React, { useEffect, useState } from 'react'
import './App.css';
import { inject, observer } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import Clients from './components/Clients'
import Actions from './components/Actions'
import Analytics from './components/Analytics'


function App(){
  useEffect(() => {

  }, [])

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" render={() => <Clients />} />
        <Route exact path="/actions" render={() => <Actions />} />
        <Route exact path="/analytics" render={() => <Analytics />} />
    </div>
    </Router>

  )
  
}
export default App
