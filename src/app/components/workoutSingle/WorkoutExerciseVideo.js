import React from "react";

export const WorkoutExerciseVideo = (props) => {
    return (
        <div className="video-wrap">
            <button className="wb-button button-nazad" onClick={() => props.changeSite("workout", {"id": props.WorkoutId, "workoutIsFromPlan": props.WorkoutIsFromPlan})}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <div className="video">
                <video controls>
                    <source src={props.VideoUrl} type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video>
            </div>
        </div>
    );
}