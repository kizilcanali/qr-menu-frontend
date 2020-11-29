import React from 'react'
import { Card, Icon, Image, Grid, Segment, Container} from 'semantic-ui-react'
import { ReactComponent as PriceIcon } from '../../assets/icons/icons8-price-tag.svg'

const CardInCart = () =>  (

    
       
            <Grid columns = {3}  >
                <Grid.Row style = {{paddingBottom: 0, paddingTop: 0}} textAlign = "middle">

                    <Grid.Column width = {3} stretched>
                        <Image fluid className = "picture" size = "massive" src = {"https://img.acunn.com/uploads/icerikler/2020/01/09/fag9388901105e16eea7e0c54.jpg"}></Image>
                    </Grid.Column>
                        
                    <Grid.Column width = {3} style = {{paddingLeft: 0, color: "#793CFF"}}>

                    
                        <h3 style = {{color: 'white'}}>Buttermilk Burger</h3>
                        <PriceIcon fill='#793CFF' style={{ height: 15, marginRight: 0, width: 15 }} /> 25.00 TL      
                    

                    </Grid.Column>

                    <Grid.Column width = {3}>
                        <Grid.Row><Icon name = "plus"></Icon></Grid.Row>
                        <Grid.Row><div> 1 </div></Grid.Row>
                        <Grid.Row><Icon name = "minus"></Icon></Grid.Row>
                    </Grid.Column>

                </Grid.Row>
            </Grid>
      
   



//     <Card>
//     <Image src= 'https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-photo-of-a-juicy-hamburger-on-a-wooden-surface-1585137801.jpg' wrapped ui={false} />
//     <Card.Content>
//       <Card.Header>Daniel</Card.Header>https://image.shutterstock.com/image-photo/hamurger-fries-260nw-1039284295.jpg
//       <Card.Meta>Joined in 2016</Card.Meta>
//       <Card.Description>
//         Daniel is a comedian living in Nashville.
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//       <a>
//         <Icon name='user' />
//         10 Friends
//       </a>
//     </Card.Content>
//   </Card>


)

export default CardInCart;