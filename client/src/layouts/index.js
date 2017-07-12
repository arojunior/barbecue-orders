import React from 'react'
import Navigation from './../components/Navigation'

const Layout = ({children}) =>
  <div>
    <Navigation />
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <div className="App-intro">
        {children}
      </div>
    </div>
  </div>

export default Layout
