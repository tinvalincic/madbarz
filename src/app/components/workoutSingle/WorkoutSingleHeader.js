import React from "react";

export const WorkoutSingleHeader = (props) => {
    return (
        <div className="workout-buttons">
            <div className="wb-wrap wb-lijevo">
                <button className="wb-button button-nazad" onClick={() => props.changeSite("feed", {"changeRoutingParameters": true})}>
                    <i className="fas fa-chevron-left"></i>
                </button>
            </div>
            <div className="wb-wrap wb-desno">
                <button className="wb-button button-name">
                    {props.DisplayName}
                </button>
            </div>
        </div>
    );
}