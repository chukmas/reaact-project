import React, {Component} from 'react'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';
import {Link, Route} from 'react-router-dom'



class App extends Component{
  render(){
    return(
      <div>
      <nav  className="navbar navbar-light bg-light justify-content-between bg-dark ">
        <a className = "navbar-brand text-white ">free world-wide shipping on orders over $100</a>
   </nav>
        <ul>
          <li><Link to ="/" style={{color:"black"}}>Home</Link></li>
          <li><Link to ="/about" style={{color:"green"}}>About</Link></li>
          <li><Link to ="/contact">Contact</Link></li>
          <li><Link to ="/gallery">Gallery</Link></li>

        </ul>
          <Route exact path="/"  component={Home}/>
          <Route  path="/about"  component={About}/>
          <Route  path ="/contact"  component={Contact}/>
          <Route  path ="/Gallery"  component={Gallery}/>


    </div>

    )
  }
}

export default App
