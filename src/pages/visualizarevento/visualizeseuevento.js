import React, { Component } from 'react'; // importando o react

// import Header from '../../components/Header/Header';

// importando as coisas do botão$ npm run start

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './visualizeseuevento.css'

// import './visualizeseuevento.css';
// import Alps from '../../assets/img/img_snowtops.jpg';



export default class visualizeseuevento extends Component {
    render() {
        return (
            <div>
                <header id="evento-header">
                    <p>lindadebonita</p>
                </header>

                <main className="visualize-w1">


                    {/* DESTAQUES  */}



                    <section className="title-event">
                        <h1 className="h1-event">Eventos em Destaque</h1>
                    </section>



                    {/*PRIMEIRO*/}

                    <div class="w3">
                        <div class="w3-card-4">
                            <div className="imagem-div-event">

                                <img class="event-img" src={require('../../assets/img-eventos/network-lgbt.jpg')} alt="Alps" />

                            </div>

                            <div class="box-description">
                                <p>The Italian / Austrian Alps</p>
                            </div>


                        </div>
                        {/*SEGUNDO*/}


                        <div class="w3-card-4">
                            <div className="imagem-div-event">
                                <img class="event-img" src={require('../../assets/img-eventos/600_483592203.jpeg')} alt="Alps" />
                            </div>


                            <div class="box-description">
                                <p className="descricao-evento">The Italian / Austrian Alps</p>
                            </div>



                        </div>


                        {/*TERCEIRO*/}


                        <div class="w3-card-4">
                            <div className="imagem-div-event">
                                <img class="event-img" src={require('../../assets/img-eventos/abragames-evento.png')} alt="Alps" />
                            </div>


                            <div class="box-description">
                                <p>The Italian / Austrian Alps</p>
                            </div>
                        </div>
                    </div>

                    {/* FIM DA SECTION 1 */}



                    <section className="title-event">
                        <h1 className="h1-event">Tecnologia</h1>
                    </section>

                    <div class="w3">
                        <div class="w3-card-4">
                            <div className="imagem-div-event">

                                <img class="event-img" src={require('../../assets/img-eventos/5db9c24e779e2.png')} alt="Alps" />

                            </div>

                            <div class="box-description">
                                <p>The Italian / Austrian Alps</p>
                            </div>


                        </div>
                        {/*SEGUNDO*/}


                        <div class="w3-card-4">
                            <div className="imagem-div-event">
                                <img class="event-img" src={require('../../assets/img-eventos/nerdzao.jpg')} alt="Alps"   />
                            </div>


                            <div class="box-description">
                                <p className="descricao-evento">The Italian / Austrian Alps</p>
                            </div>



                        </div>


                        {/*TERCEIRO*/}


                        <div class="w3-card-4">
                            <div className="imagem-div-event">
                                <img class="event-img" src={require('../../assets/img-eventos/600_483592203.jpeg')} alt="Alps" />
                            </div>


                            <div class="box-description">
                                <p>The Italian / Austrian Alps</p>
                            </div>
                        </div>
                    </div>


                    {/* FIM DA SECTION 2 */}



                    <section className="title-event">
                        <h1 className="h1-event">Representatividade</h1>
                    </section>
                    <div class="w3">
                        <div class="w3-card-4">
                            <div className="imagem-div-event">

                                <img class="event-img" src={require('../../assets/img-eventos/mulheres.png')} alt="Alps" />

                            </div>

                            <div class="box-description">
                                <p>The Italian / Austrian Alps</p>
                            </div>


                        </div>
                        {/*SEGUNDO*/}


                        <div class="w3-card-4">
                            <div className="imagem-div-event">
                                <img class="event-img" src={require('../../assets/img-eventos/lgbt.jpg')} alt="Alps" />
                            </div>


                            <div class="box-description">
                                <p className="descricao-evento">The Italian / Austrian Alps</p>
                            </div>



                        </div>


                        {/*TERCEIRO*/}


                        <div class="w3-card-4">
                            <div className="imagem-div-event">
                                <img class="event-img" src={require('../../assets/img-eventos/favela-hub-eventostech-800x450.jpg')} alt="Alps" />
                            </div>


                            <div class="box-description">
                                <p>The Italian / Austrian Alps</p>
                            </div>
                        </div>
                    </div>



                    {/* FIM DA SECTION 3 */}


                    <section className="title-event">
                        <h1 className="h1-event">WorkShop</h1>
                    </section>
                    <div class="w3">
                        <div class="w3-card-4">
                            <div className="imagem-div-event">

                                <img class="event-img" src={require('../../assets/img-eventos/5d57281d16e63.jpg')} alt="Alps" />

                            </div>

                            <div class="box-description">
                                <p>The Italian / Austrian Alps</p>
                            </div>


                        </div>
                        {/*SEGUNDO*/}


                        <div class="w3-card-4">
                            <div className="imagem-div-event">
                                <img class="event-img" src={require('../../assets/img-eventos/work-blockchain-empresas3-eventostech-800x450.jpg')} alt="Alps" />
                            </div>


                            <div class="box-description">
                                <p className="descricao-evento">The Italian / Austrian Alps</p>
                            </div>



                        </div>


                        {/*TERCEIRO*/}


                        <div class="w3-card-4">
                            <div className="imagem-div-event">
                                <img class="event-img" src={require('../../assets/img-eventos/5dc17dfebc9bb.jpg')} alt="Alps" />
                            </div>


                            <div class="box-description">
                                <p>The Italian / Austrian Alps</p>
                            </div>
                        </div>
                    </div>

                    <footer>
                        <p>ngm liga</p>
                    </footer>
                </main>

            </div>
        );
    }
}