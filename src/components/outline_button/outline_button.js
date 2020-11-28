import React from "react";

function OutlineButton(props) {
    return(
        <div>
            <button className="outline-button" type="button">{props.tag}</button>
        </div>
    );
}

export default OutlineButton;