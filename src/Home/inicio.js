import React from 'react'
import {Container, Card, Button, Header, Segment} from 'semantic-ui-react'

const Inicio = props => {
    return (
        <div>
            <Container>
                <Segment pilled>
                    Quiz
                </Segment>
                <Header as='h2'>
                    Jogo de Perguntas e Respostas
                </Header>
                <p>Desafie seus amigos neste jogo</p>
                <Card fluid>
                    <Card.Content>
                        Acesse agora mesmo:
                    </Card.Content>
                    <Card.Content>
                        <Button basic color='blue'>Login com Facebook</Button>
                        <Button basic color='gree'>Usuário Administrativo</Button>
                    </Card.Content>
                </Card>
            </Container> 
        </div>
    )
}

export default Inicio