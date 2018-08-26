import React from "react";

export const WorkoutSingleImage = (props) => {
    return (
        <div className="workout-single-image">
            <img src={props.url} alt={props.alt} className="img-responsive workout-single-image"/>
        </div>
    );
}