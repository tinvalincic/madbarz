const feedReducer = (state = {
    page: 0,
    pageSize: 5,
    feedItems: []
}, action) => {   
    switch (action.type) {
        case "LOAD_FEED":
            state = {
                ...state,
                page: state.page + 1
            };
            for(let i in action.payload){
                state = {
                    ...state,
                    feedItems: [...state.feedItems, action.payload[i]]
                };
            }            
            break;
        case "LIKE_POST":
            if(action.payload.response.ok == true){
                let key;
                for(let i in state.feedItems){
                    if(state.feedItems[i].WorkoutId == action.payload.WorkoutId){
                        key = i;
                        break;
                    }
                }
                state = {
                    ...state
                };
                state.feedItems[key] = {
                    ...state.feedItems[key],
                    CurrentUserLikedWorkout: true,
                    WorkoutLikesCount: state.feedItems[key].WorkoutLikesCount + 1
                };
            }
            break;
        case "UNLIKE_POST":
            if(action.payload.response.ok == true){
                let key;
                for(let i in state.feedItems){
                    if(state.feedItems[i].WorkoutId == action.payload.WorkoutId){
                        key = i;
                        break;
                    }
                }
                state = {
                    ...state
                };
                state.feedItems[key] = {
                    ...state.feedItems[key],
                    CurrentUserLikedWorkout: false,
                    WorkoutLikesCount: state.feedItems[key].WorkoutLikesCount - 1
                };
            }
            break;
    }
    return state;
};

export default feedReducer;