import React, { Component } from 'react';
class animacion extends Component {
    render() {
        return (
            <section id="animation">
               <link rel="stylesheet" href ="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"/>
              <div class="ui fluid container">
                <div class="row">
                  <div>
                      <h2 className="hover_pink">ANIMATION</h2>
                  </div>
                </div>
                <div class="row">
                  <div class="ui centered stackable grid">
                    <div class="five wide column">
                      <video src={process.env.PUBLIC_URL + '/imagenes/animacion_uno.mp4'} controls class="ui image animated pulse infinite">
                        Tu navegador no implementa el elemento <code>video</code>.
                      </video>
                      <p className="hover_blue">CHARACTERS AND SCENARIOS</p>
                    </div>
                    <div class="five wide column">
                       <video src={process.env.PUBLIC_URL + '/imagenes/animacion_dos.mp4'} controls class="ui image animated pulse infinite">
                            Tu navegador no implementa el elemento <code>video</code>.
                      </video>
                      <p className="hover_violet">MOTION GRAPHICS</p>
                    </div>
                    <div class="five wide column">
                      <video src={process.env.PUBLIC_URL + '/imagenes/animacion_tres.mp4'} controls class="ui image animated pulse infinite">
                            Tu navegador no implementa el elemento <code>video</code>.
                      </video>
                    <p className="hover_yellow">VFX</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default animacion;
