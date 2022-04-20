import React, {useState} from 'react';
import { FormattedMessage, useIntl } from "react-intl";


export const Treatement = () => {

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
            id="date.treatement.title"
            defaultMessage="Selecciona un tratamiento"
        />
    </h3>

<div className="symptom-options treatement">
    <input type="checkbox"
        // onChange={handleInputChange}
        name="cleaning"
        value="true"
        id="cleaning"
        // checked={formData.bleeding === 'true'}
        />
    <label 
        className={`${disabled ? 'disabled' : '' }`}
        htmlFor="cleaning"
        onClick={handleChangeDisabled}
        >
        <FormattedMessage
            id="date.treatment.cleaning"
            defaultMessage="Limpieza"
        />
    </label>    

    <input type="checkbox"
        // onChange={handleInputChange}
        name="scraped"
        value="true"
        id="scraped"
        // checked={formData.pain === 'true'}
        />

     <label 
        className={`${disabled ? 'disabled' : '' }`}
        htmlFor="scraped"
        onClick={handleChangeDisabled}
        >
        <FormattedMessage
            id="date.treatment.scraped"
            defaultMessage="Scraped"
        />
    </label>

    <input type="checkbox"
        // onChange={handleInputChange}
        name="whitening"
        value="true"
        id="whitening"
        // checked={formData.dental_movility === 'true'}
        />

    <label
        className={`${disabled ? 'disabled' : '' }`}
        htmlFor="whitening"
        onClick={handleChangeDisabled}
        >
        <FormattedMessage
            id="date.treatment.whitening"
            defaultMessage="Blanqueamiento"
        />
    </label>

    <input type="checkbox"
        // onChange={handleInputChange}
        name="checkup"
        value="true"
        id="checkup"
        // checked={formData.ulcer === 'true'}
        />

    <label 
        className={`${disabled ? 'disabled' : '' }`}
        htmlFor="checkup"
        onClick={handleChangeDisabled}
        >
        <FormattedMessage
            id="date.treatment.checkup"
            defaultMessage="Revisión"
        />
    </label>

    
    <input type="checkbox"
        // onChange={handleInputChange}
        name="fluoride"
        value="true"
        id="fluoride"
        // checked={formData.dental_stains === 'true'}
        />

    <label 
        className={`${disabled ? 'disabled' : '' }`}
        htmlFor="fluoride"
        onClick={handleChangeDisabled}
        >
        <FormattedMessage
            id="date.treatment.fluoride"
            defaultMessage="Fluorización"
        />
    </label>

    <input type="checkbox"
        // onChange={handleInputChange}
        name="orthodontic_checkup"
        value="true"
        id="orthodontic_checkup"
        // checked={formData.gums_inflammations === 'true'}
        />

    <label 
        className={`${disabled ? 'disabled' : '' }`}
        htmlFor="orthodontic_checkup"
        onClick={handleChangeDisabled}
        >
        <FormattedMessage
            id="date.treatment.orthodontic.checkup"
            defaultMessage="Revisión de Ortodoncias"
        />
    </label>

    
    <input type="checkbox"
        // onChange={handleInputChange}
        name="sealing"
        value="true"
        id="sealing"
        // checked={formData.bad_breath === 'true'}
         />

    <label 
        className={`${disabled ? 'disabled' : '' }`}
        htmlFor="sealing"
        onClick={handleChangeDisabled}
        >
        <FormattedMessage
            id="date.treatment.sealing"
            defaultMessage="Sellado de Fosas y Fisuras"
        />

    </label>

   
    <input type="checkbox"
        // onChange={handleInputChange}
        name="obturation"
        value="true"
        id="obturation"
        // checked={formData.sensibility === 'true'}
        />

     <label 
        className={`${disabled ? 'disabled' : '' }`}
        htmlFor="obturation"
        onClick={handleChangeDisabled}
        >
        <FormattedMessage
            id="date.treatment.obturation"
            defaultMessage="Obturación"
        />

    </label>

    <input type="checkbox"
        // onChange={handleInputChange}
        name="endodontics"
        value="true"
        id="endodontics"
        // checked={formData.bleeding === 'true'}
        />
    <label 
        className={`${disabled ? 'disabled' : '' }`}
        htmlFor="endodontics"
        onClick={handleChangeDisabled}
        >
        <FormattedMessage
            id="date.treatment.endodontics"
            defaultMessage="Endodoncia"
        />
    </label>    

    <input type="checkbox"
        // onChange={handleInputChange}
        name="extraction"
        value="true"
        id="extraction"
        // checked={formData.bleeding === 'true'}
        />
    <label
     className={`${disabled ? 'disabled' : '' }`}
     htmlFor="extraction"
     onClick={handleChangeDisabled}
     >
        <FormattedMessage
            id="date.treatment.extraction.simple"
            defaultMessage="Extracción Simple"
        />
    </label>    

    <input type="checkbox"
        // onChange={handleInputChange}
        name="implant"
        value="true"
        id="implant"
        // checked={formData.bleeding === 'true'}
        />
    <label 
        className={`${disabled ? 'disabled' : '' }`}
        htmlFor="implant"
        onClick={handleChangeDisabled}
        >
        <FormattedMessage
            id="date.treatment.implant"
            defaultMessage="Implantes"
        />
    </label>    

    <input type="checkbox"
        // onChange={handleInputChange}
        name="implant_checkup"
        value="true"
        id="implant_checkup"
        // checked={formData.bleeding === 'true'}
        />
    <label 
        className={`${disabled ? 'disabled' : '' }`}
        htmlFor="implant_checkup"
        onClick={handleChangeDisabled}
        >
        <FormattedMessage
            id="date.treatment.implant.checkup"
            defaultMessage="Revisión de Implantes"
        />
    </label>    

    <input type="checkbox"
        // onChange={handleInputChange}
        name="prosthesis"
        value="true"
        id="prosthesis"
        // checked={formData.bleeding === 'true'}
        />
    <label
        className={`${disabled ? 'disabled' : '' }`}
        htmlFor="prosthesis"
        onClick={handleChangeDisabled}
        >
        <FormattedMessage
            id="date.treatment.prosthesis"
            defaultMessage="Prótesis"
        />
    </label>    

    <input type="checkbox"
        // onChange={handleInputChange}
        name="prosthesis_checkup"
        value="true"
        id="prosthesis_checkup"
        // checked={formData.bleeding === 'true'}
        />
    <label
        className={`${disabled ? 'disabled' : '' }`}
        htmlFor={`${!disabled ? 'prosthesis_checkup' : '' }`}
        onClick={handleChangeDisabled}
        >
        <FormattedMessage
            id="date.treatment.prosthesis.checkup"
            defaultMessage="Revisisón de Prótesis"
        />
    </label>    

    <input type="checkbox"
        // onChange={handleInputChange}
        name="botox"
        value="true"
        id="botox"
        // checked={formData.bleeding === 'true'}
        />
    <label
        className={`${disabled ? 'disabled' : '' }`}
        htmlFor="botox"
        onClick={handleChangeDisabled}
        >
        <FormattedMessage
            id="date.treatment.botox"
            defaultMessage="Botox"
        />
    </label>    
</div>
 
</div>
  )
}
