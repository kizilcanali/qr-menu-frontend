import React from "react";

function InlineButton(props) {
    return (
        <div>
            <button className="inline-button" type="button">{props.tag}</button>
        </div>
    );
}

export default InlineButton;