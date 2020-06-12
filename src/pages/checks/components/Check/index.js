import React from 'react'

import Stepper from '../../../../components/Stepper'

import CheckForms from './CheckForms'
import Objects from './Objects'
import Sources from './Sources'

export default ({ mode }) => {

    const getSteps = () => {
        return ['Проверка', 'Объекты', 'Источники'];
    }
      
    const getStepContent = step => {
        switch (step) {
            case 0:
                return <CheckForms />;
            case 1:
                return <Objects />;
            case 2:
                return <Sources />;
            default:
                return 'Unknown step';
        }
    }

    return(
        <div>
            <div>
                Check component - mode { mode }
            </div>
            <div>
                <Stepper 
                    getSteps={ getSteps }
                    getStepContent={ getStepContent }
                />
            </div>
        </div>
    )
}