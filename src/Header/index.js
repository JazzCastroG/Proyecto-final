import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
          <header id="header">
            <div class="ui fluid container">
              <img src={process.env.PUBLIC_URL + '/imagenes/portada.gif'} alt="ux/ui" class="ui fluid image" />
            </div>
          </header>
        );
    }
}

export default Header;
