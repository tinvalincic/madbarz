import React from "react";
import { connect } from "react-redux";


import { Feed } from "./Feed";
import { Workout } from "./Workout";
import { WorkoutExerciseVideo } from "../components/workoutSingle/WorkoutExerciseVideo";
import { loadFeed, likePost, unlikePost } from "../actions/feedActions";
import { loadWorkout } from "../actions/workoutActions";
import { changeSite } from "../actions/routingActions";

class App extends React.Component {

    getActiveSite(routing){
        let active = "";
        switch (routing.site) {
            case "feed":
                const dataLength = (this.props.feed.page + 1) * this.props.feed.pageSize;
                return(
                    <Feed
                        loadFeed={() => this.props.loadFeed(this.props.feed.page, this.props.feed.pageSize)}
                        feedItems={this.props.feed.feedItems}
                        dataLength={dataLength}
                        onLike={this.props.likePost}
                        onUnlike={this.props.unlikePost}
                        changeSite={this.props.changeSite}
                    />
                );
                break;
            case "workout":
                return(
                    <Workout
                        loadWorkout={() => this.props.loadWorkout(this.props.routing.parameters.payload.id, this.props.routing.parameters.payload.workoutIsFromPlan)}
                        changeSite={this.props.changeSite}
                        workoutData={this.props.workout.workoutData}
                        onLike={this.props.likePost}
                        onUnlike={this.props.unlikePost}
                    />
                );
                break;
            case "video":
                return(
                    <WorkoutExerciseVideo
                        VideoUrl={this.props.routing.parameters.payload.VideoUrl}
                        WorkoutId={this.props.routing.parameters.payload.WorkoutId}
                        WorkoutIsFromPlan={this.props.routing.parameters.payload.WorkoutIsFromPlan}
                        changeSite={this.props.changeSite}
                    />
                );
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="container">
                {this.getActiveSite(this.props.routing)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        feed: state.feed,
        routing: state.routing,
        workout: state.workout
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        loadFeed: (page, pageSize) => {
            dispatch(loadFeed(page, pageSize));
        },
        likePost: (WorkoutId, workoutIsFromPlan) => {
            dispatch(likePost(WorkoutId, workoutIsFromPlan));
        },
        unlikePost: (WorkoutId, workoutIsFromPlan) => {
            dispatch(unlikePost(WorkoutId, workoutIsFromPlan));
        },
        changeSite: (site, parameters) => {
            dispatch(changeSite(site, parameters));
        },
        loadWorkout: (id, workoutIsFromPlan) => {
            dispatch(loadWorkout(id, workoutIsFromPlan));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);