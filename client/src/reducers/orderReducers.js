import {
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_LIST_MY_FAIL,
    ORDER_LIST_MY_REQUEST,
    ORDER_LIST_MY_SUCCESS,
    ORDER_LIST_MY_RESET,
    ORDER_PAY_FAIL,
    ORDER_PAY_REQUEST,
    ORDER_PAY_RESET,
    ORDER_PAY_SUCCESS,
} from '../constants/orderConstants'

export const orderCreateReducer = (state = {}, action) => {
    const { type, payload } = action

    switch (type) {
        case ORDER_CREATE_REQUEST:
            return {
                loading: true
            }
        case ORDER_CREATE_SUCCESS:
            return {
                order: payload,
                success: true,
                loading: false
            }
        case ORDER_CREATE_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const orderDetailsReducer = (state = { loading: true, orderItems: [1], shippingAddress: {} }, action) => {
    const { type, payload } = action

    switch (type) {
        case ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ORDER_DETAILS_SUCCESS:
            return {
                order: payload,
                loading: false
            }
        case ORDER_DETAILS_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const orderPayReducer = (state = {}, action) => {
    const { type, payload } = action

    switch (type) {
        case ORDER_PAY_REQUEST:
            return {
                loading: true
            }
        case ORDER_PAY_SUCCESS:
            return {
                success: true,
                loading: false
            }
        case ORDER_PAY_FAIL:
            return {
                loading: false,
                error: payload
            }
        case ORDER_PAY_RESET:
            return {}
        default:
            return state
    }
}


export const orderListMyReducer = (state = { orders: [] }, action) => {
    const { type, payload } = action

    switch (type) {
        case ORDER_LIST_MY_REQUEST:
            return {
                loading: true
            }
        case ORDER_LIST_MY_SUCCESS:
            return {
                orders: payload,
                loading: false
            }
        case ORDER_LIST_MY_FAIL:
            return {
                loading: false,
                error: payload
            }
        case ORDER_LIST_MY_RESET:
            return { orders: [] }
        default:
            return state
    }
}