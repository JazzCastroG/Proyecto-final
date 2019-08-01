import React, { Component } from 'react';

class index extends Component {
  render() {
    return (
      <section id="otros">
        <div class="ui fluid container">
          <div>
            <h2 className="hover_violet">OTHERS</h2>
          </div>
          <div class="row">
            <div class="ui centered grid ">
              <div class="five wide computer sixteen wide mobile five wide tablet column">
                <img src={process.env.PUBLIC_URL + '/imagenes/otros_uno.jpg'} alt="ux/ui" class="ui image animated pulse infinite" />
                <p className="hover_yellow">PACKING</p>
              </div>
              <div class="five wide computer sixteen wide mobile five wide tablet column">
                <img src={process.env.PUBLIC_URL + '/imagenes/otros_dos.jpg'} alt="ux/ui" class="ui image animated pulse infinite" />
                <p className="hover_pink">ILLUSTRATION</p>
              </div>
              <div class="five wide computer sixteen wide mobile five wide tablet column">
                <img src={process.env.PUBLIC_URL + '/imagenes/otros_tres.jpg'} alt="ux/ui" class="ui image animated pulse infinite" />
                <p className="hover_blue">TEACHING</p>
              </div>
            </div>
          </div>
          </div>
      </section>
    );
  }
}

export default index;
