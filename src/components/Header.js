import React, { Component} from 'react';
import {  Navbar, NavItem, } from 'react-materialize';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {scrolling: false};
        this.handleScroll =this.handleScroll.bind(this)
    
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

   
    handleScroll(event) {
        console.log(this.state)
        if(window.scrollY > 70) 
            this.setState( { scrolling: true });
        else 
            this.setState({ scrolling: false });
        
    }
    render() {
        const mainPage = window.location.pathname === "/";
        const scrolling= this.state.scrolling;
        let logo ;
        let centerLogo ;
        if(scrolling && mainPage)  {
            logo =  <a href="/"> Samuel Bines </a>
            centerLogo = <a></a>
        } else {
            centerLogo =  <a href="/"> <img src="images/profile-ibm.jpg" width="100px;"/>Samuel Bines  </a>
            logo = <a></a>
        }
        
        return (
            <div className="section black" >
                 <Navbar brand={logo} centerLogo fixed alignLinks="center">
                    <NavItem href="/#technology">
                        Technology
                    </NavItem>
                    <NavItem href="/#profile">
                        Profile
                    </NavItem>
                    <NavItem href="/#penpic">
                        Pen Pic
                    </NavItem>
                </Navbar>
                <div className="row container">
                    
                    <h2 className="header grey-text text-lighten-2 lighten-3">
                        {centerLogo}
                    
                    </h2>
                    <p className="grey-text text-lighten-2 lighten-3">
                        <q><i>
                            Software Developer, Technical Architect, Strategy Consultant. These titles explain my skills but not what I can accomplish.
                        </i> </q>
                    </p>

                </div>
                
            </div>
           
        );
    }
}

export default Header;