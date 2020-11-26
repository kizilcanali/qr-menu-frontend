import React from 'react'
import { Segment, Button, Image, Grid } from 'semantic-ui-react'

const ItemCard = () => (
    <Segment>
        <Grid>
            <Grid.Row stretched>
                <Grid.Column width="6" mobile="6">
                    <Image
                        src='https://i2.cnnturk.com/i/cnnturk/75/800x400/5dcab7ae5cf3b01040fc2da0' rounded
                    />
                </Grid.Column>
                <Grid.Column width={6} mobile={10}>
                    <h3>Menemen</h3>
                    <p> Domates ve yumurtanın çılgın buluşması</p>
                    <Grid columns={2}>
                        <Grid.Row verticalAlign="middle">
                            <Grid.Column width={4} mobile={2} floated='left'>
                                ₺15.00
                    </Grid.Column>
                            <Grid.Column mobile={10} floated='right'>
                                <Button fluid color='green'>
                                    Sepete Ekle
                        </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
)

export default ItemCard