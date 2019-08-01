import React, { Component } from 'react';
import './index.css';

class Biografia extends Component {
    render() {
        return (
            <div>
                 <div class="ui fluid container">
                    <div class="row">
                        <div className="box-container" id="bio">
                        <h1 className="hover_yellow">Welcome</h1>
                        <img src={process.env.PUBLIC_URL + '/imagenes/welcome_dos.png'} alt="ux/ui" class="ui image " />
                        <div class="ui centered grid">
                            <p>Hi, my name is Brenda Jazmín Castro Galindo and I Licensed in Design and Visual Communication, Oriented in symbol-ogy and three-dimensional supports. I have a specialization on Multimedia with expertise on: video editing, photography and illustration, 3D models, video / animations render and on Responsive Web Design for the UI, UX & Front End developer.</p>
                        </div>
                        </div>
                    </div>
              </div>  
            </div>
        );
    }
}

export default Biografia;