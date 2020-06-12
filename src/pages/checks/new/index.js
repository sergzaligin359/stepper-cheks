import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';

import Layout from '../../../layouts/default'
import DataTable from '../../../components/Datatable'
import Modal from '../../../components/Modal'
import Check from '../components/Check'

import { fetchChecks } from '../../../store/actions'

export default () => {

    const dispatch = useDispatch()
    const checks = useSelector(state => state.checks)
    const [openModal, setOpenModal] = React.useState(false)
    const [mode, setMode] = React.useState('')

    useEffect(() => {
        if(checks.length > 0) return
        dispatch(fetchChecks())
    }, [dispatch, checks.length])

    console.log('Checks', checks.checks)

    const handleCreateCheck = () => {
        setOpenModal(true)
        setMode('create')
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const columns = [
        { 
          title: 'Название проверки', 
          field: 'name',
          render: rowData => {
            console.log('row data', rowData)
            return <span>{ rowData.check.name }</span>
          }
        },
    ]

    return (
        <Layout>
            <div>

            </div>
            <h3>Check new page</h3>
            <div>
                <Button 
                    onClick={ handleCreateCheck }
                    variant="contained" 
                    color="primary"
                >
                    Add check+
                </Button>
            </div>
            <div>
                <DataTable 
                    data={ checks.checks && checks.checks.filter(check => check.check.checkStateId === 1) } 
                    columns={ columns }
                />
            </div>
            <div>
                <Modal
                    open={ openModal }
                    handleClose={ handleCloseModal }
                >
                    <Check 
                        mode={ mode }
                    />
                </Modal>
            </div>
        </Layout>
    )
}