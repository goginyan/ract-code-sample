
export const addSelectProducts = selectedProduct => ({
    type: "ADD_SELECT_PRODUCT",
    selectedProduct
});

export const addInterfaces = interfaces => ({
    type: "ADD_INTERFACES",
    interfaces
});

export const addCategories = categories => ({
    type: "ADD_CATEGORIES",
    categories
});

export const addBaskets = baskets => ({
    type: "ADD_BASKETS",
    baskets
});

export const addRef = (name, ref) => ({
    type: "ADD_REF",
    name,
    ref
});
