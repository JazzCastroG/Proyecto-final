import React, { Component } from 'react';

class index extends Component {
  render() {
    return (
      <section id="3d">
        <div class="ui fluid container">
          <div>
            <h2 className="hover_yellow">3D MODELING AND RENDER</h2>
          </div>
          <div class="row">
            <div class="ui centered grid">
              <div class="five wide computer sixteen wide mobile five wide tablet column">
                <video src={process.env.PUBLIC_URL + '/imagenes/modelado_uno.mp4'} controls class="ui image animated pulse infinite ">
                  Tu navegador no implementa el elemento <code>video</code>.
                </video>
                <p className="hover_pink">SURFACE MODELING</p>
              </div>
              <div class="five wide computer sixteen wide mobile five wide tablet column">
                <video src={process.env.PUBLIC_URL + '/imagenes/modelado_dos.mp4'} controls class="ui image animated pulse infinite ">
                  Tu navegador no implementa el elemento <code>video</code>.
                </video>
                <p className="hover_violet">SOLIDS MODELING</p>
              </div>
              <div class="five wide computer sixteen wide mobile five wide tablet column">
                <video src={process.env.PUBLIC_URL + '/imagenes/modelado_tres.mp4'} controls class="ui image animated pulse infinite ">
                  Tu navegador no implementa el elemento <code>video</code>.
                </video>
                <p className="hover_blue">HYBRID MODELING</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default index;
