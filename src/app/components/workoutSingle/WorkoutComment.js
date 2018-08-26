import React from "react";

import { UserAvatar } from "../workoutFeed/elements/UserAvatar";

export const WorkoutComment = (props) => {
    return (
        <div className="workout-comment">
            <div className="wc-avatar">
                <UserAvatar src={props.ImageUrl} alt={props.DisplayName}/>
            </div>
            <div className="wc-tekst">
                <span className="wc-name">{props.DisplayName}</span> {props.Content}
                {(typeof(props.Date) != "undefined") ? <span className="comment-date">{props.Date}</span> : ""}
            </div>
        </div>
    );
}