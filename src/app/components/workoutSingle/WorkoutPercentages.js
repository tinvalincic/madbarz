import React from "react";

export const WorkoutPercentages = (props) => {
    return (
        <div className="workout-percentages">
            <div className="percentage-item" id="cardio-percentage">
                <div className="percentage-name">Cardio</div>
                <div className="percentage-bar">
                    <div className="percentage-bar-fill" style={{width: props.CardioPercentage + "%"}}></div>
                </div>
            </div>
            <div className="percentage-item" id="strength-percentage">
                <div className="percentage-name">Muscles</div>
                <div className="percentage-bar">
                    <div className="percentage-bar-fill" style={{width: props.StrengthPercentage + "%"}}></div>
                </div>
            </div>
            <div className="percentage-item" id="pause">
                <div className="percentage-name">Pause</div>
                <div className="percentage-bar pause-bar">
                    <div className="pause-text">
                        {props.ShortPause} / {props.LongPause} SEC
                    </div>
                </div>
            </div>
        </div>
    );
}