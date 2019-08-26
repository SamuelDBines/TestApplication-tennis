import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  Header  from './Header';
import  Home from './Home/Index';
import  Projects from './Projects/Index';
import  Footer from './Footer';

class App extends Component {
    render() {
        return (
            <Router> 
                
                <Header/>
                <Route exact={true} path="/" component={Home} />
                <Route path="/info" component={Projects} />
                
                <Footer />
            </Router>
        );
    }
}

export default App;