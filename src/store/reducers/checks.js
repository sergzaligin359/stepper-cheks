import { FETCH_CHECKS_START, FETCH_CHECKS_SUCCESS, FETCH_CHECKS_FAILURE } from '../types'

const initialState = {}

export const checks = (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_CHECKS_START:
            return {
                ...state
            }
        case FETCH_CHECKS_SUCCESS:
            return {
                ...state,
                checks: payload
            }
        case FETCH_CHECKS_FAILURE:
            return {
                ...state
            }
        default:
            return state
    }   
}