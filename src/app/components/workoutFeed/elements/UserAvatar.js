import React from "react";

export const UserAvatar = (props) => {
    return (
        <div className="user-avatar">
            <img src={props.src} alt={typeof(props.alt) != "undefined" ? props.alt : ""} className="avatar img-responsive"/>
        </div>
    );
}