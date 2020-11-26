import React from 'react'
import { Segment, Image, Grid } from 'semantic-ui-react'

const CategoryCard = () => (

    <Grid>
        <Grid.Column>
            <Segment>
                <Grid.Row centered>
                    <Image src="https://www.flaticon.com/svg/static/icons/svg/3789/3789777.svg" size="mini" centered />
                </Grid.Row>
                <Grid.Row centered>
                    Hamburger
            </Grid.Row>
            </Segment>
        </Grid.Column>
    </Grid>
)
export default CategoryCard