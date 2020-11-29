import React from 'react';
import { Fab, Action } from 'react-tiny-fab';
import { Image } from 'semantic-ui-react';
import waiterIcon from '../../assets/icons/waiter.svg';
import handIcon from '../../assets/icons/hand.svg';
import billIcon from '../../assets/icons/bill.svg';

const FloatingButton = () => (
    < Fab
        mainButtonStyles={{ backgroundColor: 'black' }}
        actionButtonStyles={{ backgroundColor: 'black' }}
        style={{ bottom: 0, right: 0 }}
        icon={<Image src={waiterIcon} size="mini" centered />}
        event={'hover'}
        alwaysShowTitle={true}
        onClick={console.log("Basıldım")}
    >
        <Action
            text="Garson Çağır"
        >
            <Image src={handIcon} size="mini" centered />
        </Action>
        <Action
            text="Hesap İste"
        >
            <Image src={billIcon} size="mini" centered />

        </Action>
    </Fab >
)

export default FloatingButton;