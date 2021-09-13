import React, { useState } from "react";


const StatusButton = (props) => {
    const [opacity, setOpacity] = useState(1);
    const { style ={} } = props;

    const addTouchStatus = () => {
        setOpacity(0.4);
    }

    const cancelTouchStatus = () => {
        setTimeout(() => {
            setOpacity(1);
        }, 300);
    }

    return <div style={{ ...style, opacity }} onTouchStart={addTouchStatus} onTouchEnd={cancelTouchStatus}>
        {props.children}
    </div>

}

export default StatusButton;