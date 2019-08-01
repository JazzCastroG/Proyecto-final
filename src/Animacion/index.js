import React, { Component } from 'react';
class animacion extends Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            <div class="ui fluid container"></div>
              <div class="ui text container">
                    <h2 class="ui header">ANIMACIÓN</h2>
                </div>
                <div class="row">
                <div class="ui centered grid"> 
                         <div class="five wide computer sixteen wide mobile five wide tablet column">
                         <video src={process.env.PUBLIC_URL + '/imagenes/animacion_uno.mp4'} controls class="ui image ">
                            Tu navegador no implementa el elemento <code>video</code>.
                        </video>
                        <p>Personajes y escenarios</p>
                        </div>
                        <div class="five wide computer sixteen wide mobile five wide tablet column">
                         <video src={process.env.PUBLIC_URL + '/imagenes/animacion_dos.mp4'} controls class="ui image ">
                            Tu navegador no implementa el elemento <code>video</code>.
                        </video>
                        <p>Motion Graphics</p>
                        </div>
                        <div class="five wide computer sixteen wide mobile five wide tablet column">
                         <video src={process.env.PUBLIC_URL + '/imagenes/animacion_tres.mp4'} controls class="ui image ">
                            Tu navegador no implementa el elemento <code>video</code>.
                        </video>
                        <p>VFX</p>
                        </div>
            </div>
            </div>
            </div>
        );
    }
}

export default animacion;