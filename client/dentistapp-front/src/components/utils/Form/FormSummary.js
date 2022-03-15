import React from 'react';
import { FormattedMessage } from "react-intl";
import '../../../assets/styles/formSummary.css';

export const FormSummary = ({ formData, setPosition }) => {

  const handleClick = (pos) => {
    setPosition(pos);
  }

  return (
    <div className='summary-cont'>
      <h2 className="summary"><FormattedMessage
        id="form.summary.verify"
        defaultMessage="Por favor, verifique sus datos:"
      />
      </h2>

      {/* PERSONAL DATA */}
      <div className='header-summary-cont'>
      <h3 className='summary-title'>
          <FormattedMessage
            id="form.data"
            defaultMessage="Datos personales"
          />
        </h3>
        <button className="summaryBtn" onClick={() => handleClick(0)}>
          Modificar
        </button>
        </div>
      <div className="summaryBox">
      
        {formData.name && <p className="summaryData">
          <FormattedMessage
            id="form.name"
            defaultMessage="Nombre:"
          />
          <span> {formData.name} </span>
        </p>}

        {formData.surnames &&
          <p className="summaryData">
            <FormattedMessage
              id="form.surname"
              defaultMessage="Apellidos:"
            />
            <span> {formData.surnames} </span>
          </p>}

        {formData.dni &&
          <p className="summaryData">
            <FormattedMessage
              id="form.dni"
              defaultMessage="DNI:"
            />
            <span> {formData.dni} </span>
          </p>}

        {formData.phone &&
          <p className="summaryData">
            <FormattedMessage
              id="form.telephone"
              defaultMessage="Teléfono:"
            />
            <span> {formData.phone} </span>
          </p>}

       

      </div>

      {/* MEDICAL DATA */}
      <div className='header-summary-cont'>
      <h3 className='summary-title'>
          <FormattedMessage
            id="form.summary.medical"
            defaultMessage="Patologías y alergias"
          />
        </h3>
        <button className="summaryBtn" onClick={() => handleClick(1)}>
          Modificar
        </button>
        </div>
      <div className="summaryBox">
      
        <p className="summaryData">
          <FormattedMessage
            id="form.summary.medical.pathology"
            defaultMessage="Patologías:"
          />
          {formData.pathology === 'true' ?
            <span> <FormattedMessage
              id="form.yes"
              defaultMessage="Sí"
            />. <br />
              {formData.descriptionPathology} </span> :
            <span> <FormattedMessage
              id="form.no"
              defaultMessage="No"
            />
            </span>

          }
        </p>

        <p className="summaryData">
          <FormattedMessage
            id="form.summary.medical.allergy"
            defaultMessage="Alergias:"
          />
          {formData.allergy === 'true' ?
            <span> <FormattedMessage
              id="form.yes"
              defaultMessage="Sí"
            />. <br />
              {formData.descriptionAllergy}  </span> :
            <span> <FormattedMessage
              id="form.no"
              defaultMessage="No"
            />
            </span>

          }
        </p>
        
      </div>

      {/* SÍNTOMAS Y SIGNOS*/}
      <div className='header-summary-cont'>
      <h3 className='summary-title'>
          <FormattedMessage
            id="form.summary.symptoms"
            defaultMessage="Síntomas y signos"
          />
        </h3>
        <button className="summaryBtn" onClick={() =>handleClick(2)}>
          Modificar
        </button>
        </div>
      <div className="summaryBox">
       
        <p className='summaryData'>
          {formData.bleeding && <span>
            <FormattedMessage
              id="form.symptoms.bleeding"
              defaultMessage="Sangrado"
            />.  </span>}
          {formData.pain && <span>
            <FormattedMessage
              id="form.symptoms.pain"
              defaultMessage="Dolor"
            />.  </span>}
          {formData.dental_movility && <span>
            <FormattedMessage
              id="form.symptoms.dentalmov"
              defaultMessage="Movilidad dentaria"
            />.  </span>}
          {formData.ulcer && <span>
            <FormattedMessage
              id="form.symptoms.ulcers"
              defaultMessage="Úlceras"
            />.  </span>}
          {formData.dental_stains && <span>
            <FormattedMessage
              id="form.symptoms.dentalstains"
              defaultMessage="Manchas dentales"
            />.  </span>}
          {formData.gums_inflammations && <span>
            <FormattedMessage
              id="form.symptoms.gums"
              defaultMessage="Inflamación de encías"
            />.  </span>}
          {formData.bad_breath && <span>
            <FormattedMessage
              id="form.symptoms.badbreath"
              defaultMessage="Mal aliento"
            />.  </span>}
          {formData.sensibility && <span>
            <FormattedMessage
              id="form.symptoms.sensitivity"
              defaultMessage="Sensibilidad"
            />.  </span>}
          {formData.otherSimptoms && <span>
            <FormattedMessage
              id="form.others"
              defaultMessage="Otros:"
            /> {formData.otherSimptoms}  </span>}
        </p>
        
      </div>

      {/* CAUSES */}
      <div className='header-summary-cont'>
      <h3 className='summary-title'>
          <FormattedMessage
            id="form.summary.causes"
            defaultMessage="Causas"
          />
        </h3>
        <button className="summaryBtn" onClick={() =>handleClick(4)}>
          Modificar
        </button>
        </div>
      <div className="summaryBox">
      
        <p className='summaryData'>
          {formData.cavity && <span>
            <FormattedMessage
              id="form.cause.cavity"
              defaultMessage="Caries"
            />.  </span>}
          {formData.fracture && <span>
            <FormattedMessage
              id="form.cause.fracture"
              defaultMessage="Fractura"
            />.  </span>}
          {formData.gums_problems && <span>
            <FormattedMessage
              id="form.cause.gums"
              defaultMessage="Problemas de encías"
            />.  </span>}
          {formData.oral_hygiene && <span>
            <FormattedMessage
              id="form.cause.hygiene"
              defaultMessage="Productos de higiene oral"
            />.  </span>}
          {formData.oral_disease && <span>
            <FormattedMessage
              id="form.cause.diseases"
              defaultMessage="Enfermedades orales (cáncer oral, herpes labial…)"
            />.  </span>}
          {formData.oral_trauma && <span>
            <FormattedMessage
              id="form.cause.trauma"
              defaultMessage="Traumatismo oral"
            />.  </span>}
          {formData.otherCauses && <span>
            <FormattedMessage
              id="form.others"
              defaultMessage="Otros:"
            /> {formData.otherCauses}  </span>}

        </p>
        
      </div>
      {/* <p>
        {JSON.stringify(emergencyData, null, 2)}
      </p> */}
    </div>
  )
}
