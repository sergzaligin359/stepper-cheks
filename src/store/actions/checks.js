import { FETCH_CHECKS_START, FETCH_CHECKS_SUCCESS, FETCH_CHECKS_FAILURE } from '../types'

import {fetchChecks as fetchChecksApi} from '../../api'

export const fetchChecks = () => async dispatch => {
    dispatch({
        type: FETCH_CHECKS_START
    })
    try {
        const checks = await fetchChecksApi()
        dispatch({
            type: FETCH_CHECKS_SUCCESS,
            payload: checks
        })
    } catch (error) {
        dispatch({
            type: FETCH_CHECKS_FAILURE,
            payload: error,
            error: true
        })
    }
}