import React from "react";

export const WorkoutExercise = (props) => {
    return (
        <div className="workout-exercise">
            <div className="we-image" onClick={()=>{
                props.changeSite("video", {
                        VideoUrl: props.exerciseData.VideoUrl,
                        WorkoutId: props.WorkoutId,
                        WorkoutIsFromPlan: props.WorkoutIsFromPlan
                    })
                }}>
                <div className="play-ikona">
                    <i className="fas fa-play"></i>
                </div>
                <img src={props.exerciseData.ImageUrlMobile} alt={props.exerciseData.Name} className="img-responsive"/>
            </div>
            <div className="we-data">
                <div className="we-name">{props.exerciseData.Name}</div>
                <div className="we-reps">{props.exerciseData.Reps} {props.exerciseData.Unit}</div>
            </div>
        </div>
    );
}