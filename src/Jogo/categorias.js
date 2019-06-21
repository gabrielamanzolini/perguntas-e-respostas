import React, {Component} from 'react'
import {Grid, Container} from 'semantic-ui-react';
import Categoria from "./categoria";

class Categorias extends Component {
    render(){
        return(
            <div>
                <h2>Lista de Categorias</h2>
                <p>Selecione a categoria que deseja jogar:</p>
                <Container>
                    <Grid columns={5} divided>
                        <Categoria titulo="Futebol" icone="futbol outline"/>
                        <Categoria titulo="Fórmula 1" icone="trophy"/>
                        <Categoria titulo="Música" icone="music"/>
                        <Categoria titulo="Mundo" icone="globe"/>
                        <Categoria titulo="Animais" icone="paw"/>
                        <Categoria titulo="Brincadeiras" icone="puzzle piece"/>
                        <Categoria titulo="Profissões" icone="user md"/>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default Categorias