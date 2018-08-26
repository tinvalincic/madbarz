import React from "react";

import { UserAvatar } from "./elements/UserAvatar.js";

export const WorkoutHeader = (props) => {
    const featured = <p className="hot-featured">Featured</p>;
    return (
        <div className="workout-header">
            <div className="wh-element wh-avatar">
                <UserAvatar src={props.feedItem.UserImageUrl} alt={props.feedItem.UserDisplayName}/>
            </div>
            <div className="wh-element wh-username">
                <div className="username">
                    <p className="username-text">{props.feedItem.UserDisplayName}</p>
                    {(props.feedItem.WorkoutIsFeatured ? featured : "")}
                </div>
            </div>
            <div className="wh-element wh-date">
                <div className="workout-date">
                    <div className="workout-date-text">{props.feedItem.WorkoutDate}</div>
                </div>
            </div>
        </div>
    );
}