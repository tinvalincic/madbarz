import React from "react";

export const WorkoutSingleData = (props) => {
    return (
        <div className="workout-single-data">
            <h1 className="workout-name wsd-name">{props.Name}</h1>
            <div className="wsd-data">{props.NumberOfCycles} rounds, {props.WorkoutLength}, {props.Points} pts</div>
        </div>
    );
}