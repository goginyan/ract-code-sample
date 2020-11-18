
const initialState = {
    list:{}
};

export default function(state = initialState, action) {

    switch (action.type) {
        case "ADD_REF": {
            return {
                list: {...state.list, ...{ [action.name] : action.ref}}
            };
        }

        default:
            return state;
    }
}