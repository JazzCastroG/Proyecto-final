import React, { Component } from 'react';

class index extends Component {
  render() {
    return (
      <section id="fotografia">
        <div class="ui fluid container">
          <div>
            <h2 className="hover_blue">PHOTOGRAPHY</h2>
          </div>
          <div class="row">
            <div class="ui centered grid ">
              <div class="five wide computer sixteen wide mobile five wide tablet column">
                <img src={process.env.PUBLIC_URL + '/imagenes/fb_uno.jpg'} alt="ux/ui" class="ui image animated pulse infinite" />
                <p className="hover_yellow">NATURE</p>
              </div>
              <div class="five wide computer sixteen wide mobile five wide tablet column">
                <img src={process.env.PUBLIC_URL + '/imagenes/fb_dos.jpg'} alt="ux/ui" class="ui image animated pulse infinite" />
                <p className="hover_pink">LANDSCAPE</p>
              </div>
              <div class="five wide computer sixteen wide mobile five wide tablet column">
                <img src={process.env.PUBLIC_URL + '/imagenes/fb_tres.jpg'} alt="ux/ui" class="ui image animated pulse infinite" />
                <p className="hover_violet">ANIMALS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default index;
