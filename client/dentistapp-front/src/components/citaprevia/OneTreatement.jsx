import {useContext, useEffect, useState} from 'react';

import {AppointmentContext} from './Appointment.context'

import {FormattedMessage} from 'react-intl';


export const OneTreatement = ({name}) => {

    const { AppoinmentValues,setAppoinmentValues, saludoProvider } = useContext(AppointmentContext);

    const [treatments, setTreatments] = useState(AppoinmentValues.treatments);
    
    useEffect(() => {
        // const howManyTreatments = Object.values(AppoinmentValues.treatments);
        console.log(saludoProvider);
        // console.log(howManyTreatments.every(t => t !== true));

        // console.log(howManyTreatments);
        // if(Object.values(treatments).every(value => value === false)) console.log('todos los tratamientos estan en false');
        // if (AppoinmentValues.treatments.values().every(t => t === false)) {
        //     console.log('Todos los tratamientos estan en false');
        // }
        return () => {

        }
        
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
                ...AppoinmentValues.treatments,
                [name]: !AppoinmentValues.treatments[name]
            }
        })
    }

    



    return (
        <>

            <input type="checkbox"
                checked={treatments[name]}
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
