import React from 'react'
import {Grid, Segment, Header} from 'semantic-ui-react'

const Categoria = props => {
    return(
        <Grid.Column>
            <Segment circular style={tamanho}>
                <Header as='h2'>
                    Esportes
                    <Header.Subheader><Icon name='football ball'/></Header.Subheader>
                </Header>
            </Segment>
        </Grid.Column>
    )
}

export default Categoria