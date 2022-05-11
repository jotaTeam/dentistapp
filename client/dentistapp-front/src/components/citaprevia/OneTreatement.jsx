import {useContext, useEffect, useState} from 'react';

import {AppointmentContext} from './Appointment.context'

import {FormattedMessage} from 'react-intl';


export const OneTreatement = ({name}) => {

    const { AppoinmentValues,setAppoinmentValues } = useContext(AppointmentContext);

    const [treatments, setTreatments] = useState(AppoinmentValues.treatments);
    
    useEffect(() => {
        const howManyTreatments = Object.values(AppoinmentValues.treatments);

        console.log(howManyTreatments.every(t => t !== true));

        // console.log(howManyTreatments);
        // if(Object.values(treatments).every(value => value === false)) console.log('todos los tratamientos estan en false');
        // if (AppoinmentValues.treatments.values().every(t => t === false)) {
        //     console.log('Todos los tratamientos estan en false');
        // }

        
    }, [AppoinmentValues])

    const handleClick = (e) => {

        
    }

    const handleInputChange = (e) => {

        setTreatments({
            ...treatments,
            [name]: !treatments[name]
        })

        setAppoinmentValues({
            ...AppoinmentValues,
            treatments:{
                ...treatments,
                [name]: !treatments[name]
            }
        })
    }

    



    return (
        <>

            <input type="checkbox"
                onChange={handleInputChange}
                name={name}
                value={treatments[name]}
                id={name}
            // checked={formData.bleeding === 'true'}
            />
            <label
                // className={`${disabled ? 'disabled' : ''}`}
                htmlFor={name}
                onClick={handleClick}
            >
                <FormattedMessage
                    id={`date.treatment.${name}`}
                    defaultMessage={`${name}`}
                />
            </label>
        </>
    )
}
