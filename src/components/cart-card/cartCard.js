import React from 'react'
import { Image, Grid } from 'semantic-ui-react'
import { ReactComponent as PriceIcon } from '../../assets/icons/icons8-price-tag.svg'
import PlusIcon from '../../assets/icons/plus.svg'
import MinusIcon from '../../assets/icons/minus.svg'

const CardInCart = () => (

    <Grid>
        <Grid.Row stretched>
            <Grid.Column mobile={5} style={{ paddingRight: 0 }}>
                <Image src={"https://img.acunn.com/uploads/icerikler/2020/01/09/fag9388901105e16eea7e0c54.jpg"}></Image>
            </Grid.Column>

            <Grid.Column mobile={10} style={{ color: "#793CFF", backgroundColor: "#292E3C", marginRight: 0 }}>
                <Grid columns={2}>
                    <Grid.Row verticalAlign="middle">
                        <Grid.Column textAlign="center">
                            <h3 style={{ color: 'white' }}>Buttermilk Burger</h3>
                            <PriceIcon fill='#793CFF' style={{ height: 15, marginRight: 0, width: 15 }} /> 25.00 TL
                        </Grid.Column>
                        <Grid.Column style={{ textAlign: 'left' }} mobile={3} floated='right'>
                            <Grid.Row style={{ marginBottom: 10 }}><Image src={PlusIcon} size="small" /></Grid.Row>
                            <Grid.Row> 1 </Grid.Row>
                            <Grid.Row style={{ marginTop: 10 }}><Image src={MinusIcon} size="small" /></Grid.Row>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>

        </Grid.Row>
    </Grid>
)

export default CardInCart;