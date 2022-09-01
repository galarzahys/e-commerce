export const initialState = {
    basket: [],
    user: null,
    checkout_data: [],
    payment_data: [],
    activeStep: 0
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    DEL_FROM_BASKET: "DEL_FROM_BASKET",
    EMPTY_BASKET: "EMPTY_BASKET",
    SET_USER: "SET_USER",
    SET_CO_DATA: "SET_CO_DATA",
    SET_PAY_DATA: "SET_PAY_DATA",
    RESET_DATA: "RESET_DATA",
    SET_STEP: "SET_STEP",
}

export const getBasketTotal = (basket) => {
    const total = basket?.reduce((amount, item) => item.price + amount, 0)
    return total
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
    case "ADD_TO_BASKET":
        return {
            ...state,
            basket: [...state.basket, action.item ]
        };
    case "DEL_FROM_BASKET":
        const index = state.basket.findIndex((basketItem => basketItem.id === action.id))
        console.log(index)
        let newBasket = [...state.basket];

        if (index >= 0){
            newBasket.splice(index, 1)
        }
        return {
            ...state,
            basket: newBasket,
        };
    case "EMPTY_BASKET":
        return {
            ...state,
            basket: action.basket
        }

    case "SET_USER":
        return {
            ...state,
            user: action.user
        }
    case "SET_CO_DATA":
        return {
            ...state,
            checkout_data: action.checkout_data
        }
    case "SET_PAY_DATA":
        return {
            ...state,
            payment_data: action.payment_data
        }
    case "RESET_DATA":
        return {
            ...state,
            basket: action.basket,
            checkout_data: action.checkout_data,
            payment_data: action.payment_data,
            activeStep: action.activeStep

        }
    case "SET_STEP":
        return {
            ...state,
            activeStep: action.activeStep
        }
        
        default: 
            return state;
}


}



export default reducer;