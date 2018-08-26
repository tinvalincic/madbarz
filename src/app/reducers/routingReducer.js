const routingReducer = (state = {
    site: "feed",
    parameters: {}
}, action) => {   
    switch (action.type) {
        case "CHANGE_SITE":
            state = {
                ...state,
                site: action.payload.site,
                parameters: {...action.payload}
            };
            break;
    }
    return state;
};

export default routingReducer;