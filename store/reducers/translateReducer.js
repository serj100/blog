const initialState = null

export const translateReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TRANSLATION":
            return { loading: action.payload };
        default:
            return state;
    }
};