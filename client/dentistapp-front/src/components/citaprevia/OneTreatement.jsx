import {useContext} from 'react';

import {AppointmentContext} from './Appointment.context'

import {FormattedMessage} from 'react-intl';


export const OneTreatement = ({name}) => {

    const { AppoinmentValues,setAppoinmentValues } = useContext(AppointmentContext);

    const {treatments} = AppoinmentValues;
    
    console.log(treatments[name]);

    const handleClick = (e) => {

        
    }

    const handleInputChange = (e) => {
        console.log(`soy el input change ${e.target.value} y ${e.target.name}`);
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
