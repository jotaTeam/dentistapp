import { useState } from 'react';
import { AppointmentContext } from './Appointment.context'
import { CitaPreviaForm } from './CitaPreviaForm';

const Appoinment = () => {
 

    const saludoProvider = "hola";

    const [AppoinmentValues, setAppoinmentValues] = useState({
        personalData: {
            name: '',
            lastName: '',
            email: '',
            phone: '',
            age: '',
            dni: '',
        },
        treatments: {
            dental_cleaning: false,
            curettage: false,
            Teeth_Whitening: false,
            medical_check: false,
            orthodontics_check: false,
            fluoridation: false,
            pit_and_fissure_sealing: false,
            obturation: false,
            endodontics: false,
            simple_extraction: false,
            implants: false,
            check_implants: false,
            prosthesis: false,
            check_prosthesis: false,
            botox: false,
        },
    })
    
    return (


        <AppointmentContext.Provider value={{
            AppoinmentValues,
            setAppoinmentValues,
            saludoProvider
        }}>
            <CitaPreviaForm/>
        </AppointmentContext.Provider>


    )
}

export default Appoinment;
