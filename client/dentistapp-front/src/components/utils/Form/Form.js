import React, { useRef, useState } from "react";
import { useForm } from '../../../hooks/useForm';
import { FormattedMessage } from "react-intl";
import { PersonalData } from "./PersonalData";
import { MedicalData } from "./MedicalData";
import { Symptoms } from "./Symptoms";
import { Causes } from "./Causes";
import '../../../assets/styles/form.css';
//import { UrgenciasValidator } from "../validators/UrgenciasValidator";
import { PainLocation } from "./PainLocation";
import { FormSummary } from "./FormSummary";
import {SubmitModal} from "../../urgencias/SubmitModal";

export const Form = () => {

    const [formData, handleInputChange] = useForm({

    });

  const [modalOpen, setModalOpen] = useState(false);

    const [position, setPosition] = useState(0);

    const emergencyData = useRef({});

    //TEETH
    const actTeeth = useRef([]);

    let teeth = '';

    let prevState = [false, false, false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false,
        false, false, false];

    const [active, setActive] = useState(prevState);

    const setTeeth = (activeTeeth) => {
        actTeeth.current = activeTeeth;
    }

    //FORM COMPONENTS
    const formComponents = [
        <PersonalData
            formData={formData}
            handleInputChange={handleInputChange}
        />,
        <MedicalData
            formData={formData}
            handleInputChange={handleInputChange}
        />,
        <Symptoms
            formData={formData}
            handleInputChange={handleInputChange}
        />,
        <PainLocation
            formData={formData}
            handleInputChange={handleInputChange}
            setTeeth={setTeeth}
            active = {active}
            setActive = {setActive}
            prevState = {prevState}
        />,
        <Causes
            formData={formData}
            handleInputChange={handleInputChange}
        />,
        <FormSummary
        formData={formData}
        emergencyData = {emergencyData.current}
        handleInputChange={handleInputChange}
        setPosition = {setPosition}
    />
    ];

 


    const onHandleNext = (e) => {
        setPosition(position + 1);
    }
    const onHandlePrev = (e) => {
        setPosition(position - 1);
    }


    const onSubmitHandle = (e) => {
        e.preventDefault();
        console.log(formData);

        actTeeth.current.forEach((t, i) => {
                   if (t) {
                        teeth += `${i} `;
                    }
                });
        emergencyData.current = {...formData};
        emergencyData.current.pieces = teeth;
       // console.log(emergencyData);
       console.log("probando: patologia =  " + formData.pathology + " alergia = " + formData.allergy)
        
    };

  const handleModal = () => {
    setModalOpen(true);
  }

    return (

        <>
            <div className="formCont">
               
                    
    
                {/* {
                isReady
                    ? <UrgenciasValidator formData={formData}/>
                    : ''
            } */}


                <form onSubmit={onSubmitHandle}>
                <h1 className="form-urg-title ">
                        <FormattedMessage
                            id="form.title"
                            defaultMessage="Formulario de urgencias"
                        />
                    </h1>

                    {formComponents[position]}
                    {/* 
                if(pain){

                <div className="pain-location-cont">
                <PainLocation
                    formData={formData}
                    handleInputChange={handleInputChange}
                    />,
                </div>
                } */}

                    {(position === 5) ?
                     <div className="btn-cont one-btn">
                        <button className="btn-next" type="submit" onClick={handleModal}>
                            <FormattedMessage
                                id="form.send"
                                defaultMessage="Enviar"
                            />
                        </button>
                    </div>
                        :

                        (position === 0) ?
                        <div className="btn-cont one-btn">
                       <button className="btn-next" onClick={onHandleNext}>
                            <FormattedMessage
                                id="form.btnNext"
                                defaultMessage="Next"
                            />
                        </button>
                           
                      </div>
                      :
                      <div className="btn-cont">
                        <button className="btn-prev" onClick={onHandlePrev}>
                          <FormattedMessage
                              id="form.btnPrev"
                              defaultMessage="Previous"
                          />
                      </button>
                        <button className="btn-next" onClick={onHandleNext}>
                            <FormattedMessage
                                id="form.btnNext"
                                defaultMessage="Next"
                            />
                        </button>
                         
                      </div>
                    }


                </form>

            </div>

	  <SubmitModal modalOpen={modalOpen} setModalOpen={setModalOpen} emergencyData={emergencyData} />
        </>
    );

};








