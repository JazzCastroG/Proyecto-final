import React, { Component } from 'react';

class index extends Component {
    render() {
        return (
            <div>
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            <div class="ui fluid container">
                <div class="ui text container">
                <h2 class="ui header">FOTOGRAFÍA</h2>
                </div>
                <div class="row">
                <div class="ui centered grid "> 
                     <div class="five wide computer sixteen wide mobile five wide tablet column">
                            <img src={process.env.PUBLIC_URL + '/imagenes/fb_uno.jpg'} alt="ux/ui" class="ui image " />
                            <p>Naturaleza</p>
                    </div>
                    
                    <div class="five wide computer sixteen wide mobile five wide tablet column">
                            <img src={process.env.PUBLIC_URL + '/imagenes/fb_dos.jpg'} alt="ux/ui" class="ui image" />
                            <p>Paisaje</p>
                    </div>
                    
                    <div class="five wide computer sixteen wide mobile five wide tablet column">
                            <img src={process.env.PUBLIC_URL + '/imagenes/fb_tres.jpg'} alt="ux/ui" class="ui image" />
                            <p>Animales</p>
                    </div>
                    </div>
                    </div>
            </div>
    </div>
        );
    }
}

export default index;