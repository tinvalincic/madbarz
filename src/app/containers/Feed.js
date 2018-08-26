import React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';

import { WorkoutHeader } from "../components/workoutFeed/WorkoutHeader";
import { WorkoutBody } from "../components/workoutFeed/WorkoutBody";
import { WorkoutTools } from "../components/workoutFeed/WorkoutTools";
import { Header } from "../components/Header";

export class Feed extends React.Component {
    constructor(){
        super();
    }
    componentDidMount() {
        this.props.loadFeed();
    }

    render() {
        var enteredEntries = [];
        return (
            <div className="event-feed-holder">
                <Header/>
                <InfiniteScroll
                    dataLength={this.props.dataLength}
                    next={this.props.loadFeed}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    {this.props.feedItems.filter(function(feedItem) {                        
                        if(enteredEntries.includes(feedItem.WorkoutId)){
                            return false;
                        }else{
                            enteredEntries.push(feedItem.WorkoutId);
                            return true;
                        }
                    }).map(feedItem => (
                        <div id="feed-container" key={feedItem.WorkoutId}>
                            <div className="workout-element">
                                <div className="workout-link" onClick={()=>{this.props.changeSite("workout", {
                                            "id": feedItem.WorkoutId,
                                            "workoutIsFromPlan": feedItem.IsWorkoutFromPlan
                                        })
                                    }}>
                                    <WorkoutHeader feedItem={feedItem}/>
                                    <WorkoutBody feedItem={feedItem}/>
                                </div>
                                <WorkoutTools
                                    feedItem={feedItem}
                                    onLike={this.props.onLike}
                                    onUnlike={this.props.onUnlike}
                                />
                            </div>
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        );
    }
}