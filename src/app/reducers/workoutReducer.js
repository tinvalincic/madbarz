const workoutReducer = (state = {
    workoutData: {
        Exercises: [],
        Comments: [],
        IsAlreadyRespected: false
    }
}, action) => {   
    switch (action.type) {
        case "LOAD_WORKOUT":
            state = {
                ...state,
                workoutData: {...action.payload}
            };        
            break;
        case "LIKE_POST":
            state = {
                ...state,
                workoutData: {
                    ...state.workoutData,
                    IsAlreadyRespected: true
                }
            };
            break;
        case "UNLIKE_POST":
            state = {
                ...state,
                workoutData: {
                    ...state.workoutData,
                    IsAlreadyRespected: false
                }
            };
            break;
    }
    return state;
};

export default workoutReducer;