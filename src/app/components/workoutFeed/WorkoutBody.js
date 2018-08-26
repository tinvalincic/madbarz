import React from "react";

import { WorkoutImage } from "./elements/WorkoutImage";
import { WorkoutDetails } from "./elements/WorkoutDetails";
import { WorkoutData } from "./elements/WorkoutData";

var defaults = {
    "image": <div className="text-center feed-no-image feed-ikona"><i className="fas fa-camera"></i></div>
};

export const WorkoutBody = (props) => {
    return (
        <div className="workout-body">
            {(props.feedItem.WorkoutImageUrl != "" ? <WorkoutImage url={props.feedItem.WorkoutImageUrl} alt={props.feedItem.UserDisplayName}/> : defaults.image)}
            <h2 className="workout-name">{props.feedItem.WorkoutName}</h2>
            {(props.feedItem.WorkoutDetails != "" ? <WorkoutDetails text={props.feedItem.WorkoutDetails}/> : "")}
            <WorkoutData duration={props.feedItem.WorkoutDuration} score={props.feedItem.WorkoutScore}/>
        </div>
    );
}