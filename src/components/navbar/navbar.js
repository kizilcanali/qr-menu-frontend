import React from 'react'
import { Grid, Button } from 'semantic-ui-react'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/basket.svg';
const Navbar = () => (
    <Grid style={{ paddingTop: 10, marginBottom: 5, color: 'white' }}>
        <Grid.Row>
            <Grid.Column mobile={4} textAlign="left" style={{ paddingLeft: 30 }}>
                <Button circular icon={< MenuIcon fill="white" style={{ height: 30, width: 30 }} />} style={{ padding: 10, backgroundColor: '#292E3C' }} />
            </Grid.Column>
            <Grid.Column mobile={4} textAlign="center" style={{ margin: 'auto' }}>
                <h2>CAFE 236</h2>
            </Grid.Column>
            <Grid.Column mobile={4} textAlign="right" style={{ paddingRight: 80 }}>
                <Button circular icon={< CartIcon fill="white" style={{ height: 30, width: 30 }} />} style={{ padding: 10, backgroundColor: '#292E3C' }} />
            </Grid.Column>
        </Grid.Row>
    </Grid>

)

export default Navbar