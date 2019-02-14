import React, { Component } from 'react';
import './Header.css';

const bgImage = {
  backgroundImage:
    "url(https://www.xmple.com/wallpaper/orange-gradient-linear-red-1920x1080-c2-ff8c00-dc143c-a-150-f-14.svg)",
  height: "60vh",
  backgroundSize: "cover"
};



class Header extends Component {
    render() {
        return ( 

            <header style= { bgImage }>
               <h1>{this.props.title}</h1>
                <p className='An_Initiation'><b>An Initiation for Learning React.  </b></p>
                <a href="#button">{this.props.button}</a>
               
            </header>
        );
    }
    
};
export default Header;