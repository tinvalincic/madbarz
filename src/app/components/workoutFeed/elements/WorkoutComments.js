import React from "react";

export const WorkoutComments = (props) => {
    return (
        <div className="tools-comment">
            <div className="tools-icon">
                <i className="far fa-comments"></i>
            </div>
            <div className="tools-text">{props.numberOfComments}</div>
        </div>
    );
}