import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            <div class="ui fluid container bg-footer">
              
                <div class="row">
                <div class="ui centered grid"></div>
                <div class="for wide computer sixteen wide mobile five wide tablet column">
                    <img src={process.env.PUBLIC_URL + '/imagenes/jazmin.jpg'} alt="ux/ui" class="ui image" />
                </div>
                <div class="for wide computer sixteen wide mobile five wide tablet column">
                    <form class="ui form">
                    <div class="ui text container ">
                    <h2 class="ui header">CONTACTO</h2>
                </div>
                        <div class="field">
                            <h1>BRENDA JAZMÍN CASTRO</h1>
                            <p>jazmincastrog@icloud.com</p>
                            <p><a href="tel:+521 5610889407"></a>+521 5610889407</p>
                            <label>Nombre</label>
                            <input placeholder="First Name" />
                        </div>
                        <div class="field">
                            <label>Mensaje</label>
                            <input placeholder="Last Name" />
                        </div>
                        <button type="submit" class="ui button">Enviar</button>
                    </form>
                </div>
                </div>
                </div>
                </div>
        );
    }
}

export default Footer;