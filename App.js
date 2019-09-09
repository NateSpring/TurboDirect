import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navigation from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Cart from './components/Cart'
import Contact from './components/Contact'
import Landing from './components/Landing'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
              <Navigation />
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route path="/shop" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/contact" component={Contact}/>
                  </Switch>
                  <Footer />
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
