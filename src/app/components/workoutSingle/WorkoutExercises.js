import React from "react";

import { WorkoutExercise } from "./WorkoutExercise";
export const WorkoutExercises = (props) => {
    return (
        <div className="workout-exercises">
            {props.exercises.map(exercise => (
                <WorkoutExercise
                    exerciseData={exercise}
                    key={exercise.ExerciseId}
                    changeSite={props.changeSite}
                    WorkoutId={props.WorkoutId}
                    WorkoutIsFromPlan={props.WorkoutIsFromPlan}
                />
            ))}
        </div>
    );
}