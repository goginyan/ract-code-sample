
const initialState = {

};

export default function(state = initialState, action) {

    switch (action.type) {
        case "ADD_SELECT_PRODUCT": {
            return {
                selectedProduct: action.selectedProduct,
            };
        }

        default:
            return state;
    }
}
