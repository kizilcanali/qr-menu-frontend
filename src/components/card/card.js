import React from 'react'
import { Button, Image, Grid } from 'semantic-ui-react'
import { ReactComponent as PriceIcon } from '../../assets/icons/icons8-price-tag.svg'
const ItemCard = () => (
    <Grid style={{ marginLeft: 10 }}>
        <Grid.Row stretched>
            <Grid.Column width={6} mobile={5} style={{ padding: 0 }}>
                <Image
                    src='https://i2.cnnturk.com/i/cnnturk/75/800x400/5dcab7ae5cf3b01040fc2da0' />
            </Grid.Column>
            <Grid.Column width={6} mobile={10} style={{ backgroundColor: '#292E3C', color: 'white', textAlign: 'center' }}>
                <h3>Menemen</h3>
                <p> Domates ve yumurtanın çılgın buluşması</p>
                <Grid columns={2}>
                    <Grid.Row verticalAlign="middle" style={{ paddingBottom: 30 }}>
                        <Grid.Column width={4} mobile={7} floated='left' style={{ marginLeft: 15 }} style={{ fontSize: 12 }}>
                            <PriceIcon fill='white' style={{ height: 15, marginRight: 0, width: 15 }} /> 15.00 TL
                    </Grid.Column>
                        <Grid.Column mobile={8} floated='right'>
                            <Button style={{ backgroundColor: '#793CFF', color: 'white', fontSize: 10 }}>
                                Sepete Ekle
                        </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>

        </Grid.Row >

    </Grid >
)

export default ItemCard