const initialState = 'ru'

export const ruEnReducer = (state = initialState, action) => {
    switch (action.type) {
        case "RUEN":
            return { loading: action.payload };
        default:
            return state;
    }
};