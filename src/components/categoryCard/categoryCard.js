import React from 'react'
import { Image, Grid } from 'semantic-ui-react'

const CategoryCard = () => (

    <Grid>
        <Grid.Column>
            <div className="container">
                <Image src="https://cdn.yemek.com/mncrop/313/280/uploads/2016/05/ev-yapimi-hamburger.jpg" size="small" rounded />
                <div className="image-text">
                    Hamburger
                </div>
            </div>
        </Grid.Column>
    </Grid >
)
export default CategoryCard