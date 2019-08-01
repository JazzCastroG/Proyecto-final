import React, { Component } from 'react';
//<video src={process.env.PUBLIC_URL + '/imagenes/portada.mp4'} controls>
                //Tu navegador no implementa el elemento <code>video</code>.
               // </video>
class Header extends Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
           
            <header className="header">
            <div class="ui fluid container">
               <img src={process.env.PUBLIC_URL + '/imagenes/portada.gif'} alt="ux/ui" class="ui fluid image" />
           
            </div>
            </header>
            </div>
        );
    }
}

export default Header;
