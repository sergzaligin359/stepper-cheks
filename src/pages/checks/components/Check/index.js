import React from 'react'

import Stepper from '../../../../components/Stepper'

export default ({ mode }) => {
    return(
        <div>
            <div>
                Check component - mode { mode }
            </div>
            <div>
                <Stepper />
            </div>
        </div>
    )
}