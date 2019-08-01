import React, { Component } from 'react';
import './index.css';
class index extends Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                <div class="ui fluid container">
                    <div class="ui text container">
                    <h2 class="ui header">DISEÑO UX/UI</h2>
                    </div>
                    <div class="row">
                    <div class="ui centered grid "> 
                         <div class="five wide computer sixteen wide mobile five wide tablet column">
                            <a target="_blank" href="https://www.convenciondeljuego2019.mx/beta.html">
                                <img src={process.env.PUBLIC_URL + '/imagenes/pbuno.jpg'} alt="ux/ui" class="ui image " />
                            </a>
                            <p>Página Web: 2ª CONVENCIÓN NACIONAL DE LA INDUSTRIA DEL JUEGO</p>
                        </div>
                        <div class="five wide computer sixteen wide mobile five wide tablet column">
                            <a target="_blank"  href="https://www.interdrought2020.com/">
                                <img src={process.env.PUBLIC_URL + '/imagenes/pbdos.jpg'} alt="ux/ui" class="ui image" />
                            </a>
                            <p>Página Web: INTERDROUGHT 2020</p>
                        </div>
                        <div class="five wide computer sixteen wide mobile five wide tablet column">
                            <a target="_blank" href="https://congresomedicinacritica2019.mx/">
                                <img src={process.env.PUBLIC_URL + '/imagenes/pbtres.jpg'} alt="ux/ui" class="ui image" />
                            </a>
                            <p>Página Web: Colegio Mexicano de Medicina Crítica (COMMEC)</p>
                        </div>
                        </div>
                        </div>
                </div>
        </div>
        );
    }
}

export default index;