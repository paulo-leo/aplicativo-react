import React from 'react';
import axios from 'axios';

export default class Table extends React.Component{
    /*Estados da aplicação*/
    state = {
        url:'https://pokeapi.co/api/v2/pokemon?limit=10',
        pokemons: [],
        btn_next:null,
        btn_previous:null,
        loading:true
      }

      /*Criação da requisição AJAX*/
      getAPI(url){
        this.state.loading = true;
        axios.get(url)
        .then(response => {
          const pokemons = response.data.results;
          const btn_next = response.data.next;
          const btn_previous = response.data.previous;
          this.setState({ pokemons,btn_next,btn_previous});
        }).finally(() => this.state.loading = false)

      }
      /*Monta o componente*/
      componentDidMount() {
          this.getAPI(this.state.url);
      }
      /*Atualiza o componente*/
      componentDidUpdate() {
        this.getAPI(this.state.url);
      }
     /*Botão próximo*/
     Next = () => {
        const url = this.state.btn_next;
        this.setState({url});
      }
      /*Botão anterior*/
      Previous = () => {
        const url = this.state.btn_previous;
        this.setState({url});
      }
   
      /*Renderiza o componete*/
      render() {
         return (  
          <>
          {this.state.loading ? <h1 className="alert alert-primary">Carregando...</h1> : null}
          <ul className="list-group list-group-flush">
            { this.state.pokemons.map(pokemon => <li className="list-group-item">{pokemon.url}</li>)}
          </ul>
            <div className="btn-group">
             {this.state.btn_previous != null ? <button className="btn btn-outline-primary" onClick={this.Previous}>Anterior</button> : null}
             
             {this.state.btn_next != null ? <button className="btn btn-outline-primary" onClick={this.Next}>Próxima</button> : null}
            </div>
          </>
        )
      }
}
