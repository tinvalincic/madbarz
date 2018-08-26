export function loadFeed(page, pageSize) {
    var url = `http://madbarz-test-api.azurewebsites.net/api/JobTask/GetFeed?page=${page}&pageSize=${pageSize}`; 

    return dispatch => {
        fetch(url).then(function(response) {
            return response.json();
        }).then(function(json) {
            dispatch({
                type: "LOAD_FEED",
                payload: json
            });
        });
    }
}
export function likePost(WorkoutId, workoutIsFromPlan) {
    var url = `http://madbarz-test-api.azurewebsites.net/api/JobTask/Like?WorkoutId=${WorkoutId}&WorkoutIsFromPlan=${workoutIsFromPlan}`;

    return dispatch => {
        fetch(url).then(function(response) {
            dispatch({
                type: "LIKE_POST",
                payload: {
                    "response": response,
                    "WorkoutId": WorkoutId
                }
            });
        })
    }
}
export function unlikePost(WorkoutId, workoutIsFromPlan) {
    var url = `http://madbarz-test-api.azurewebsites.net/api/JobTask/UnLike?WorkoutId=${WorkoutId}&WorkoutIsFromPlan=${workoutIsFromPlan}`;

    return dispatch => {
        fetch(url).then(function(response) {
            dispatch({
                type: "UNLIKE_POST",
                payload: {
                    "response": response,
                    "WorkoutId": WorkoutId
                }
            });
        })
    }
}