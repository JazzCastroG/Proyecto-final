import React, { Component } from 'react';

class index extends Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            <div class="ui fluid container"></div>
              <div class="ui text container">
                    <h2 class="ui header">MODELADO 3D</h2>
                </div>
                <div class="row">
                <div class="ui centered grid"> 
                         <div class="five wide computer sixteen wide mobile five wide tablet column">
                         <video src={process.env.PUBLIC_URL + '/imagenes/modelado_uno.mp4'} controls class="ui image ">
                            Tu navegador no implementa el elemento <code>video</code>.
                        </video>
                        <p>Modelado superficial</p>
                        </div>
                        <div class="five wide computer sixteen wide mobile five wide tablet column">
                         <video src={process.env.PUBLIC_URL + '/imagenes/modelado_dos.mp4'} controls class="ui image ">
                            Tu navegador no implementa el elemento <code>video</code>.
                        </video>
                        <p>Modelado de sólidos</p>
                        </div>
                        <div class="five wide computer sixteen wide mobile five wide tablet column">
                         <video src={process.env.PUBLIC_URL + '/imagenes/modelado_tres.mp4'} controls class="ui image ">
                            Tu navegador no implementa el elemento <code>video</code>.
                        </video>
                        <p>Modelado híbrido</p>
                        </div>
            </div>
            </div>
            </div>
        );
    }
}

export default index;