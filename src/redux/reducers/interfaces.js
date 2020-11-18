
const initialState = {
    interfaces: {}
};

export default function(state = initialState, action) {

    switch (action.type) {
        case "ADD_INTERFACES": {
            return action.interfaces;
        }

        default:
            return state;
    }
}