import React from "react";

import { WorkoutSingleHeader } from "../components/workoutSingle/WorkoutSingleHeader";
import { WorkoutSingleImage } from "../components/workoutSingle/WorkoutSingleImage";
import { WorkoutPercentages } from "../components/workoutSingle/WorkoutPercentages";
import { WorkoutSingleData } from "../components/workoutSingle/WorkoutSingleData";
import { WorkoutExercises } from "../components/workoutSingle/WorkoutExercises";
import { WorkoutLikes } from "../components/workoutFeed/elements/WorkoutLikes";
import { WorkoutComments } from "../components/workoutSingle/WorkoutComments";
import { WorkoutComment } from "../components/workoutSingle/WorkoutComment";

export class Workout extends React.Component {
    componentDidMount() {
        this.props.loadWorkout();
    }
    render() {
        return (
            <div className="workout">
                <WorkoutSingleHeader DisplayName={this.props.workoutData.DisplayName} changeSite={this.props.changeSite}/>
                <WorkoutSingleImage
                    url={(this.props.workoutData.WorkoutImageUrl == null ? this.props.workoutData.UserImageUrl : this.props.workoutData.WorkoutImageUrl)}
                    alt={this.props.workoutData.UserName}
                />
                <div className="workout-single-body">
                    <WorkoutSingleData
                        Name={this.props.workoutData.Name}
                        NumberOfCycles={this.props.workoutData.NumberOfCycles}
                        WorkoutLength={this.props.workoutData.WorkoutLength}
                        Points={this.props.workoutData.Points}
                    />
                    <div className="workout-single-likes">
                        <WorkoutLikes 
                            numberOfLikes={this.props.workoutData.NumberOfRespects}
                            isLiked={this.props.workoutData.IsAlreadyRespected}
                            onLike={this.props.onLike}
                            onUnlike={this.props.onUnlike}
                            WorkoutId={this.props.workoutData.WorkoutId}
                            IsWorkoutFromPlan={this.props.workoutData.IsWorkoutFromPlan}
                        />
                    </div>
                    <WorkoutExercises
                        exercises={this.props.workoutData.Exercises}
                        changeSite={this.props.changeSite}
                        WorkoutId={this.props.workoutData.WorkoutId}
                        WorkoutIsFromPlan={this.props.workoutData.IsWorkoutFromPlan}
                    />
                    <WorkoutPercentages
                        CardioPercentage={this.props.workoutData.CardioPercentage}
                        StrengthPercentage={this.props.workoutData.StrengthPercentage}
                        ShortPause={this.props.workoutData.ShortPause}
                        LongPause={this.props.workoutData.LongPause}
                    />
                    <div className="workout-user-comment">
                        <WorkoutComment
                            ImageUrl={this.props.workoutData.UserImageUrl}
                            DisplayName={this.props.workoutData.DisplayName}
                            Content={this.props.workoutData.WorkoutComment}
                        />
                    </div>
                    <WorkoutComments
                        Comments={this.props.workoutData.Comments}
                        NumberOfComments={this.props.workoutData.NumberOfComments}
                    />
                </div>
            </div>
        );
    }
}