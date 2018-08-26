import React from "react";


export const WorkoutLikes = (props) => {
    function LajkAnlajk(props){
        if(props.isLiked == true){
            props.onUnlike(props.WorkoutId, props.IsWorkoutFromPlan);
        }else{
            props.onLike(props.WorkoutId, props.IsWorkoutFromPlan);
        }
    }
    return (
        <div className="tools-comment">
            <div className={(props.isLiked == true ? "tools-icon liked" : "tools-icon")}>
                <button id="like-post" onClick={() => LajkAnlajk(props)}>
                    <i className="fas fa-heart"></i>
                </button>
            </div>
            <div className="tools-text">{props.numberOfLikes}</div>
        </div>
    );
}