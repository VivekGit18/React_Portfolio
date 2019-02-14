import React, { Component } from 'react';
// import logo from './logo.svg';
import '../src/nav.css';

class Navigation extends Component {
    render() {
        const sections = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];
        const navLinks = sections.map(vivek => {         
            return(        
                 <li><a href={'#' + vivek }>{vivek}</a></li>
                

            )
        });
        return (         
          <nav>
            <h2 className="heading">{ this.props.logoTitle }</h2>      
            <ul>
                { navLinks }
            </ul>
          </nav>
        );
    }
}

export default Navigation;

