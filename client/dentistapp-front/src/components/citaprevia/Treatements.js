import { FormattedMessage } from "react-intl";
import { OneTreatement } from './OneTreatement';


export const Treatements = () => {


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
