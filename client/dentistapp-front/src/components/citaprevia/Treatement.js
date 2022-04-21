import {useState, useContext} from 'react';
import { FormattedMessage, useIntl } from "react-intl";
import { AppointmentContext } from './Appointment.context';
import { OneTreatement } from './OneTreatement';


export const Treatement = () => {

    const treatments= [
        'dental_cleaning',
        'curettage',
        'Teeth_Whitening',
        'medical_check',
        'orthodontics_check',
        'fluoridation',
        'pit_and_fissure_sealing',
        'obturation',
        'endodontics',
        'simple_extraction',
        'implants',
        'check_implants',
        'prosthesis',
        'check_prosthesis',
        'botox',
    ];

    let {AppoinmentValues, setAppoinmentValues} = useContext(AppointmentContext);

    const intl = useIntl();

    const [disabled, setdisabled] = useState(false);
    
    const handleChangeDisabled = (e) =>{
        //setdisabled(true);
        if(e.target.htmlFor === "cleaning"){
            console.log("cleaning")
        }
    }

  return (
    <div className="symptom-form">
            
    <h3>
        <FormattedMessage
            id="date.treatment.title"
            defaultMessage="Selecciona un tratamiento"
        />
    </h3>

<div className="symptom-options treatement">

    {
        treatments.map((treatment, index) => <OneTreatement key={index} name={treatment}/>)
    }

</div>
 
</div>
  )
}
