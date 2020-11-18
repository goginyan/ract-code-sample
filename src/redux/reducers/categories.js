
const initialState = {

};

export default function(state = initialState, action) {

    switch (action.type) {
        case "ADD_CATEGORIES": {
            return {
                list : action.categories,
            };
        }

        default:
            return state;
    }
}
