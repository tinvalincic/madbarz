import React from "react";

export const WorkoutData = (props) => {
    return (
        <div className="text-center workout-data">
            <div className="data-item">
                <div className="data-icon feed-ikona">
                    <i className="far fa-clock"></i>
                </div>
                <div className="data-text">
                    {props.duration}
                </div>
            </div>
            <div className="data-item">
                <div className="data-icon feed-ikona">
                    <i className="fas fa-trophy"></i>
                </div>
                <div className="data-text">
                    {props.score}
                </div>
            </div>
        </div>
    );
}