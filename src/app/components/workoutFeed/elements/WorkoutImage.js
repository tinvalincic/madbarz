import React from "react";

export const WorkoutImage = (props) => {
    return (
        <div className="workout-image">
            <img src={props.url} alt={props.alt} className="img-responsive"/>
        </div>
    );
}