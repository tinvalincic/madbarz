import React from "react";

import { WorkoutComment } from "./WorkoutComment";

export const WorkoutComments = (props) => {
    var commentsText;
    if (props.NumberOfComments == 0) {
        commentsText = <p>There are no comments on this post.</p>
    }else if (Number(props.NumberOfComments) <= 3) {
        commentsText = <p>There are no more comments on this post.</p>
    } else{
        commentsText = <p>View all {props.NumberOfComments} comments.</p>
    }                                
    return (
        <div className="workout-comments">
            <div className={(props.NumberOfComments == 0 ? "no-comments" : "")} id="comments-list">
                {props.Comments.map(comment => (
                    <WorkoutComment
                        ImageUrl={comment.ImageUrl}
                        DisplayName={comment.DisplayName}
                        Content={comment.Content}
                        Date={comment.Date}
                        key={comment.Id}
                    />
                ))}
            </div>
            <div className="view-all-comments">
                <div className="comments-icon">
                    <i className="far fa-comments"></i>
                </div>
                <div className="comments-text">
                    {commentsText}
                </div>
            </div>
        </div>
    );
}