import React from 'react'
import { Image, Grid } from 'semantic-ui-react'
import { ReactComponent as PriceIcon } from '../../assets/icons/icons8-price-tag.svg'
import PlusIcon from '../../assets/icons/plus.svg'
import MinusIcon from '../../assets/icons/minus.svg'

const CardInCart = (props) => (


    
    <Grid style = {{marginLeft: 0.1}} >

        <Grid.Row stretched>
                <Grid.Column mobile={5} style={{ paddingRight: 0}}>
                    <Image style = {{borderTopLeftRadius: 5, borderBottomLeftRadius: 5}} src={"https://img.acunn.com/uploads/icerikler/2020/01/09/fag9388901105e16eea7e0c54.jpg"}></Image>
                </Grid.Column>
                
                <Grid.Column mobile={10} style={{ color: "#793CFF", backgroundColor: "#292E3C", marginRight: 0, borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
                    <Grid columns={2}>
                        <Grid.Row verticalAlign="middle">
                            <Grid.Column textAlign="center" mobile = {10}>
                                <div style = {{marginLeft: -20}}>
                                    <div style= {{ color: 'white', fontSize: 15}}>{props.name}</div>
                                    <div style = {{marginLeft: -30, marginTop:5}}>
                                        <PriceIcon fill='#793CFF' style={{ height: 15, marginRight:0, width: 15 }} /> {props.price} TL
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column style = {{ textAlign: 'left' }} mobile={3} floated='right'>
                                <Grid.Row style = {{ marginBottom: 10, paddingTop: 5, color: 'white'}}><Image src={PlusIcon} size="small" /></Grid.Row>
                                <Grid.Row style = {{paddingLeft: 5, paddingTop: 2, color: 'white'}}> 1 </Grid.Row>
                                <Grid.Row style = {{ marginTop: 10, color: 'white' }}><Image src= {MinusIcon} size="small" /></Grid.Row>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
        </Grid.Row>
    </Grid>

)

export default CardInCart;