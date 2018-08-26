export function loadWorkout(id, workoutIsFromPlan) {
    var url = `http://madbarz-test-api.azurewebsites.net/api/JobTask/GetWorkout?id=${id}&workoutIsFromPlan=${workoutIsFromPlan}`;

    return dispatch => {
        fetch(url).then(function(response) {
            return response.json();
        }).then(function(json) {
            dispatch({
                type: "LOAD_WORKOUT",
                payload: json
            });
        });
    }
}