import React from 'react'
import { FormattedMessage } from "react-intl";
import {useContext, useEffect, useState} from 'react';

import {AppointmentContext} from './Appointment.context'


export const DateCalendar = () => {

  const appoinments = [
    'date',
    'time', 
    'other'
  ]

  const { AppoinmentValues,setAppoinmentValues } = useContext(AppointmentContext);

  const [appoinment, setAppoinment] = useState(AppoinmentValues.appoinment);

  const handleInputChange = (e) => {

    const {name, value}= e.target;
    console.log(name + '/ ' + value)

    setAppoinment({
        ...appoinment,
        [name]: value
    })

     setAppoinmentValues({
         ...AppoinmentValues,
         appoinment:{
             ...AppoinmentValues.appoinment,
             [name]: value
         }
     })
}

  return (
    <div className='symptom-form calendar'>
    <h3>
        <FormattedMessage
            id="date.calendar.title"
            defaultMessage="Selecciona una fecha"
        />
    </h3>
      <input
       type='date'
       className='date-form'
       onChange={handleInputChange}
       name='date'
       ></input>
    <h3>
        <FormattedMessage
            id="date.calendar.hour"
            defaultMessage="Selecciona una hora"
        />
    </h3>
      <input 
      type='time'
      className='time-form'
      onChange={handleInputChange}
      name='time'
      ></input>
    <h3>
        <FormattedMessage
            id="date.calendar.moreinfo"
            defaultMessage="Selecciona una hora"
        />
    </h3>
      <textarea
      className='more-info-form'
      onChange={handleInputChange}
      name='other'
      />

    </div>
  )
}
