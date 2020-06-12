import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import DataTable from '../../../components/Datatable'
import Layout from '../../../layouts/default'

import { fetchChecks } from '../../../store/actions'

export default () => {

    const dispatch = useDispatch()
    const checks = useSelector(state => state.checks)

    useEffect(() => {
        if(checks.length > 0) return
        dispatch(fetchChecks())
    }, [dispatch, checks.length])

    console.log('Checks', checks)

    return (
        <Layout>
            <h3>Check new page</h3>
            <DataTable />
        </Layout>
    )
}