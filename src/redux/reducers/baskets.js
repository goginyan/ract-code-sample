
const initialState = {
    list:[]
};

export default function(state = initialState, action) {

    switch (action.type) {
        case "ADD_BASKETS": {
            return {
                list:action.baskets
            };
        }

        default:
            return state;
    }
}