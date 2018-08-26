import React from "react";

import { WorkoutComments } from "./elements/WorkoutComments";
import { WorkoutLikes } from "./elements/WorkoutLikes";

export const WorkoutTools = (props) => {
    return (
        <div className="workout-tools">
            <div className="tools-column">
                <WorkoutComments numberOfComments={props.feedItem.WorkoutCommentsCount}/>
            </div>
            <div className="tools-column column-right">
                <WorkoutLikes 
                    numberOfLikes={props.feedItem.WorkoutLikesCount}
                    isLiked={props.feedItem.CurrentUserLikedWorkout}
                    onLike={props.onLike}
                    onUnlike={props.onUnlike}
                    WorkoutId={props.feedItem.WorkoutId}
                    IsWorkoutFromPlan={props.feedItem.IsWorkoutFromPlan}
                />
            </div>
        </div>
    );
}