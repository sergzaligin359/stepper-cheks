import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchChecks } from '../../../store/actions'

export default () => {

    const dispatch = useDispatch()
    const checks = useSelector(state => state.checks)

    useEffect(() => {
        dispatch(fetchChecks())
    }, [dispatch])

    console.log('Checks', checks)

    return (
        <h3>Check new page</h3>
    )
}