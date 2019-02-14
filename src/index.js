import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Navigation from '../src/nav';
import Header from './Header';
import Services from '../src/Services';

ReactDOM.render(<Navigation logoTitle="React Protfolio" />, document.getElementById('root'));

class App extends Component {
    render (){
        return (
             <div>
                <Navigation logoTitle ="VK_DUBEY"/>
                <Header  title ="Stylish Portfolio" button="Find Out More"/>
                <Services />
             </div>

        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));
serviceWorker.unregister();
