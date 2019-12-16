import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import AboutUs from "./containers/AboutUs/AboutUs";
import Contacts from "./containers/Contacts/Contacts";
import Home from "./containers/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar/>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={AboutUs}/>
                <Route path='/contact' component={Contacts}/>
                <Route render={() => <h1>Not Found</h1>}/>
              </Switch>
            </BrowserRouter>
        );
    }
}

export default App;