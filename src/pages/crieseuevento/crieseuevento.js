import React, { Component } from 'react'; // importando o react
import './crieseuevento.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css'
// import Header from '../../components/Header/Header.js'

import api from '../../services/api';
// import {ParseJwt} from '../../services/auth'



class crieseuevento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaEventos: [],
            nomeEvento: '',
            dataEvento: '',
            acessoLivre: '',
            categoria: '',
            nomeResponsavel: '',
            contato: '',
            sala: '',
            libras: false,
            alimentacao: false,
            equipamento: '',
            nomeComunidade: '',
            restricaoAlimentar: ''
        }
        // Todos os bind da pagina de criar eventos
        this.atualizarEstadoAcesso = this.atualizarEstadoAcesso.bind(this); // o que é isso? 


        this.atualizarEstadoData = this.atualizarEstadoData.bind(this); //DATA
        this.atualizarEstadoNome = this.atualizarEstadoNome.bind(this); //Nome do evento
        
        
        
        this.atualizarEstadoCategoria = this.atualizarEstadoCategoria.bind(this); //CATEGORIAS??
        this.atualizarEstadoAlimentacao = this.atualizarEstadoAlimentacao.bind(this); //Alimentação sim ou não
        
        this.atualizarEstadoRestricaoAlimentar = this.atualizarEstadoRestricaoAlimentar.bind(this); // qual alimentação
        
        this.atualizarEstadoSala = this.atualizarEstadoSala.bind(this); //salas
        this.atualizarEstadoContato = this.atualizarEstadoContato.bind(this); //contato
        this.atualizarEstadoEquipamento = this.atualizarEstadoEquipamento.bind(this); //equipamento
        this.atualizarEstadoLibras = this.atualizarEstadoLibras.bind(this);//libras
        
        this.postCrieseuevento = this.postCrieseuevento.bind(this); //SUBMIT
        }

    atualizarEstadoNome(event) {this.setState({ nomeEvento: event.target.value })}

    atualizarEstadoData(event) {this.setState({ dataEvento: event.target.value })}

    atualizarEstadoAcesso(event) {this.setState({ acessoLivre: event.target.value })}

    atualizarEstadoCategoria(event) {this.setState({ categoria: event.target.value })}

    atualizarEstadoNomeResponsavel(event) {this.setState({ nomeResponsavel: event.target.value })}
    

    atualizarEstadoContato(event) {this.setState({ contato: event.target.value })}

    atualizarEstadoSala = (event, value) => {
        console.log({ sala: Number(value) })
        this.setState({ sala: Number(value) });
    }

    atualizarEstadoLibras = () => {
        console.log("foi")
        this.setState({
            libras: !this.state.libras
        })
    }

    atualizarEstadoAlimentacao = () => {
        console.log("foi")
        this.setState({
            libras: !this.state.alimentacao
        })
    }

    atualizarEstadoEquipamento(event) {this.setState({ equipamento: event.target.value })}

    atualizarEstadoNomeComunidade(event) {this.setState({ nomeComunidade: event.target.value })}

    atualizarEstadoRestricaoAlimentar(event) {this.setState({ restricaoAlimentar: event.target.value })}

    // cadastrarEventos = (event) => {
    //     event.preventDefault();
        // Evita o comportamento padrao da pagina

        // fetch('http://localhost:5000/api/eventos',
        //     {
        //         method: 'POST', //Declarar o metodo que vamos acessar da url
        //         body: JSON.stringify({
        //         headers: {
        //                 "Content-type": "application/json"
        //             }
        //         })
        //         .then(response => response.JSON())
                


        //             nomeEvento: this.state.titulo,
        //             dataEvento: this.state.dataEvento,
        //             acessoLivre: this.state.acessoLivre,
        //             nomeResponsavel: this.state.nomeResponsavel,
        //             contato: this.state.contato,
        //             sala: this.state.sala,
        //             librar: (this.state.libras) ? 1 : 0,
        //             alimentacao: (this.state.alimentacao) ? 1 : 0,
        //             equipamento: (this.state.equipamento) ? 1 : 0,
        //     }
        // )
        postCrieseuevento = (e) => {
            e.preventDefault();

            console.log(this.state.nomeEvento)
            console.log(this.state.dataEvento)
            console.log(this.state.categoria)
            console.log(this.state.nomeResponsavel)
            console.log(this.state.contato)
            console.log(this.state.sala)
            console.log(this.state.libras)
            console.log(this.state.alimentacao)
            console.log(this.state.equipamento)
            console.log(this.state.nomeComunidade)
            console.log(this.state.restricaoAlimentar)
            
            api.post('/evento', { nomeEvento: this.state.nomeEvento,
                dataEvento: this.state.dataEvento,
                acessoLivre: this.state.acessoLivre,
                nomeResponsavel: this.state.nomeResponsavel,
                contato: this.state.contato,
                sala: this.state.sala,
                libras: (this.state.libras) ? 1 : 0,
                alimentacao: (this.state.alimentacao) ? 1 : 0,
                equipamento: (this.state.equipamento) ? 1 : 0,
            })
            .then(response => {
                if(response.status == 200){
                    alert('foi')
                }
            })

            .catch(error => {
                console.log(error);
                this.setState({erroMensagem: ''})
            })
        }           
                





    render() {
        return (
            <div>
                {/* <Header/> */}
                <main className="main-crieseuevento">
                    <div className="formulario div-um">
                        <img src={require('../../assets/img/logo.png')} className="squareevents" alt="imagem de uma placa de madeira que é o simbolo da pagina" />
                        <h1 className="registro">Crie seu Evento</h1>
                        <form onSubmit={this.postCrieseuevento}>
                            <div className="father-div">
                                <div className="textinput-crieseuevento">
                                    <p className="titulo-nome1">Nome do Evento: </p>
                                    <input type="text" className="botao-um" name="nomeEvento"
                                        value={this.AtualizarEstadoNome}
                                        onChange={this.state.nomeEvento}
                                    />
                                </div>


                                <div className="datetime-crieseuevento">
                                    <p className="titulo-nome4">Data</p>

                                    <input type="date" name="dataEvento"
                                        value={this.AtualizarEstadoData}
                                        onChange={this.state.dataEvento}
                                    />

                                    <p className="titulo-nome4">Hora</p>

                                    <select name="hora-crieseuevento">
                                        <option value="setehoras">19h</option>
                                        <option value="oitohoras">20h</option>
                                    </select>
                                </div>

                                <p className="titulo-nome2">Nome do Responsavel da Comunidade: </p>

                                <input type="text" className="botao-um"
                                    value={this.state.nomeResponsavel}
                                    onChange={this.state.AtualizarEstadoNomeResponsavel}
                                />


                                <p className="titulo-nome3">Nome da Comunidade </p>

                                <input type="text" className="botao-um"
                                    value={this.AtualizarEstadoNomeComunidade}
                                    onChange={this.state.nomeComunidade}
                                />


                                <p className="titulo-nome5">Contato </p>

                                <input type="number" className="botao-um"
                                    value={this.AtualizarEstadoContato}
                                    onChange={this.state.contato}
                                />

                            </div>

                            <h2 className="registro">Detalhes do Evento</h2>
                            <div className="formulario div-três">
                                <div className="salas-eventos">
                                    {/* Alteraçoes na sala */}
                                    <p className="titulo-nome5">Salas: </p>
                                    <section className="alinhando-as-salas">
                                        <div class="sala-de-reuniao">
                                            <div class="view">
                                                <img src={require("../../assets/img/imagens_tw.jpg")} class="img-fluid" alt="placeholder" />
                                                <div class="mask flex-center waves-effect waves-light rgba-teal-strong">
                                                    <div class="teste">
                                                        {/* teste */}
                                                        <div class="col-md-12 mb-4">
                                                            {/* botão de select sala */}
                                                            <button type="button" class="btn btn-success px-3"><i class="far fa-thumbs-up" aria-hidden="true"></i></button>
                                                            <p class="white-text">sala de reunião</p></div>
                                                    </div>
                                                    {/* teste */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* fim da sala de reunião */}

                                        <div class="lounge">
                                            <div class="view">
                                                <img src={require("../../assets/img/lounge_tw.jpg")} class="img-fluid" alt="placeholder" />
                                                <div class="mask flex-center waves-effect waves-light rgba-teal-strong">

                                                    {/* botão de select sala */}

                                                    <button type="button" value={this.state.sala}
                                                        onClick={(event) => this.atualizarEstadoSala(event, '1')}
                                                        class="btn btn-success px-3"><i class="far fa-thumbs-up" aria-hidden="true"></i></button>
                                                    <p class="white-text">lounge</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* fim do lounge */}

                                    {/* teste da imagem do evento */}

                                    <p className="titulo-nome5">Escolha uma imagem para o seu evento: </p>
                                    <div>
                                        <div class="view">
                                            {/* <img src={require("../../assets/img/imagen")} class="img-fluid" alt="placeholder"/> */}
                                            <div class="mask flex-center waves-effect waves-light rgba-teal-strong">
                                                <p class="white-text">Imagem do evento</p>
                                                <button type="button" class="btn btn-link">Link</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <form className="form-botao" action="#">
                        <input type="number" className="botao-um"
                        value={this.state.sala}
                        onChange={this.state.AtualizarEstadoSala}
                        />
                         </form> */}
                                </div>

                                <div className="botoes-evento">
                                    <p className="titulo-nome6">Interprete de libras? </p>

                                    <div id="app-cover">
                                        <div className="row">
                                            <div className="toggle-button-cover">
                                                <div className="button-cover">
                                                    <div className="button r" id="button-1">
                                                        <input type="checkbox" className="checkbox"
                                                            value={this.state.libras}
                                                            onChange={this.atualizarEstadoLibras}
                                                        />
                                                        <div className="knobs" />
                                                        <div className="layer" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="titulo-nome7">Alimentação</p>
                                <div id="app-cover">
                                    <div className="row">
                                        <div className="toggle-button-cover">
                                            <div className="button-cover">
                                                <div className="button r" id="button-1">
                                                    <input type="checkbox" className="checkbox"
                                                        value={this.state.alimentacao}
                                                        onChange={this.atualizarEstadoAlimentacao}
                                                    />
                                                    <div className="knobs" />
                                                    <div className="layer" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="titulo-nome9">Alguma restrição de Alimentação? </p>

                                    <input type="text" className="botao-um" placeholder="Comida Vegetariana? Sem Glúten? "
                                        value={this.atualizarEstadoRestricaoAlimentar}
                                        onChange={this.state.restricaoAlimentar}
                                    />


                                    <p className="titulo-nome10">Equipamentos </p>

                                    <input type="text" className="botao-um" placeholder="Microne? DataShow?"
                                        value={this.state.equipamento}
                                        onChange={this.state.AtualizarEstadoEquipamento}
                                    />

                                    {/* alterações da emily */}
                                    <p className="titulo-nome11">Presença </p>

                                    <input type="text" className="botao-um" placeholder="Link da rede que seus convidados confirmam presença Ex:Sympla" />

                                    {/* Emily add um botão*/}
                                    {/* importando botão do bdm */}
                                    <button type="submit" class="btn btn-yellow">Envie seu evento</button>
                                    {/* Fim da mudança do botão */}
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="poligono-evento">

                    </div>

                    {/* Imagem lateral  */}
                    <div className="div-tres">
                        <img src={require("../../assets/img/18c7560356f85b006653f4a1280a3297.jpg")} className="banner-1" alt="" />
                    </div>
                </main>
            </div>
        )
    }
}
export default crieseuevento;