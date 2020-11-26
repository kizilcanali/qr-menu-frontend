import React from 'react'
import { Fab, Action } from 'react-tiny-fab';
import { Image } from 'semantic-ui-react'

const FloatingButton = () => (
    < Fab
        mainButtonStyles={{ color: 'red', backgroundColor: 'black' }}
        actionButtonStyles={{ color: '#FF5733' }}
        style={{ color: 'red', bottom: 0, right: 0 }}
        icon={"+"}
        event={'hover'}
        alwaysShowTitle={true}
        onClick={console.log("Basıldım")}
    >
        <Action
            text="Garson Çağır"
            onClick={console.log("Bastılar")}
        >
            <Image src="https://pngimg.com/uploads/waiter/waiter_PNG38.png" />
        </Action>
        <Action
            text="Sipariş Ver"
        >
        </Action>
    </Fab >
)

export default FloatingButton;