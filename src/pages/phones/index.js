import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getPhones } from '../../selectors'
import { fetchPhones } from '../../store/actions'

import Layout from '../../layouts/default'

export default () => {

    const dispatch = useDispatch();
    const phones = useSelector(state => getPhones(state))

    console.log('PHONES', phones)

    useEffect(() => {
        dispatch(fetchPhones())
    }, [dispatch])

    return (
        <Layout>
            <div>
                <h1>Просто стартовая страница</h1>
            </div>
        </Layout>
    )
}