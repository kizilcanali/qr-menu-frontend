import React from "react";
import { Icon } from "@iconify/react";

function Input(props) {
    return (
        <div>
            <form className="mb-3">
                <div className="input-field">
                    <Icon className="icon" icon={props.icon} height="3vh" width="3vw" />
                    {/* <i class={`far fa-${props.icon} fa-lg`}></i> */}
                    <input className="input" type="text" name="search" placeholder={props.placeHolder}/>
                </div>
            </form>
        </div>
    );
}

export default Input;