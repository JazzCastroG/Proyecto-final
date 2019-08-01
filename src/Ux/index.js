import React, { Component } from 'react';
import './index.css';

class Ux extends Component {
  render() {
    return (
     
      <section id="ux">
        <link rel="stylesheet" href ="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"/>
        <div class="ui fluid container">
          <div>
            <h2 className="hover_violet">UX/UI DESIGN</h2>
          </div>
          <div class="row">
            <div class="ui centered grid ">
              <div class="five wide computer sixteen wide mobile five wide tablet column ">
                <a target="_blank" href="https://www.convenciondeljuego2019.mx/beta.html">
                  <img src={process.env.PUBLIC_URL + '/imagenes/pbuno.jpg'} alt="ux/ui" class="ui image animated pulse infinite" />
                </a>
                <p className="hover_pink">WEBSITE: 2nd NATIONAL CONVENTION OF THE GAME INDUSTRY <a target="_blank" href="https://www.convenciondeljuego2019.mx/beta.html"><i aria-hidden="true" class="certificate loading icon"></i> </a> </p>
              </div>
              <div class="five wide computer sixteen wide mobile five wide tablet column">
                <a target="_blank"  href="https://www.interdrought2020.com/">
                  <img src={process.env.PUBLIC_URL + '/imagenes/pbdos.jpg'} alt="ux/ui" class="ui image animated pulse infinite" />
                </a>
                <p className="hover_blue">WEBSITE: INTERDROUGHT<br/>2020 <a target="_blank" href="https://www.interdrought2020.com/"><i aria-hidden="true" class="certificate loading icon"></i> </a></p>
              </div>
              <div class="five wide computer sixteen wide mobile five wide tablet column">
                <a target="_blank" href="https://congresomedicinacritica2019.mx/">
                  <img src={process.env.PUBLIC_URL + '/imagenes/pbtres.jpg'} alt="ux/ui" class="ui image animated pulse infinite" />
                </a>
                <p className="hover_yellow">WEBSITE: MEXICAN COLLEGE OF CRITICAL MEDICINE (COMMEC) <a target="_blank" href="https://congresomedicinacritica2019.mx/"><i aria-hidden="true" class="certificate loading icon"></i> </a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Ux;
