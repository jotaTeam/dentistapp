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

export const Form = () => {

    const [formData, handleInputChange] = useForm({

    });

    const [position, setPosition] = useState(0);

    const emergencyData = useRef({});
    const actTeeth = useRef([]);
    let teeth = '';

    const setTeeth = (activeTeeth) => {
        actTeeth.current = activeTeeth;
    }

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
        emergencyData.current.teeth = teeth;
       // console.log(emergencyData);
       console.log("probando: patologia =  " + formData.pathology + " alergia = " + formData.allergy)
        
    };

    return (

        <>
            <div className='under-background-form'></div>

            <div className="formCont">
                <div className="background-form">
                    {/* <svg className="back" width="900" height="600" viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="transparent" d="M0 0h900v600H0z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M206.664 47.1c-44.182 0-80 35.817-80 80v159.085c0 44.182 35.818 80 80 80h159.085c4.719 0 9.342-.409 13.836-1.192v-77.817c0-39.465 28.575-72.255 66.164-78.808V127.1c0-44.183-35.817-80-80-80H206.664z" fill="#1aacaa"/><path d="M233.76 250.849s19.805 12.236 52.834 12.236c33.03 0 52.835-12.236 52.835-12.236" stroke="#fff" stroke-width="22.048" stroke-linecap="round" stroke-linejoin="round"/><path d="M246.389 175.964c0 14.302-11.867 25.916-26.53 25.916s-26.53-11.614-26.53-25.916 11.867-25.916 26.53-25.916 26.53 11.614 26.53 25.916zm132.242 0c0 14.302-11.867 25.916-26.53 25.916s-26.53-11.614-26.53-25.916 11.867-25.916 26.53-25.916 26.53 11.614 26.53 25.916z" fill="#fff" stroke="#fff"/><rect x="392.391" y="219.982" width="319.085" height="319.085" rx="80" fill="#1aacaa"/><path d="M499.486 423.731s19.805 12.236 52.835 12.236c33.029 0 52.835-12.236 52.835-12.236" stroke="#fff" stroke-width="22.048" stroke-linecap="round" stroke-linejoin="round"/><path d="M512.115 348.846c0 14.302-11.867 25.916-26.53 25.916s-26.53-11.614-26.53-25.916 11.867-25.915 26.53-25.915 26.53 11.613 26.53 25.915zm132.242 0c0 14.302-11.867 25.916-26.53 25.916s-26.53-11.614-26.53-25.916 11.867-25.915 26.53-25.915 26.53 11.613 26.53 25.915z" fill="#fff" stroke="#fff"/><path d="M490.885 95.174c15.829 7.852 36.839-2.244 36.839-2.244s-4.669-22.824-20.507-30.665c-15.83-7.852-36.831 2.233-36.831 2.233s4.669 22.824 20.499 30.676z" fill="url(#a)"/><circle r="10.75" transform="matrix(1 0 0 -1 247.333 472.98)" fill="#1aacaa"/><circle r="20.218" transform="matrix(1 0 0 -1 512.923 161.229)" fill="#1aacaa"/><circle cx="656.056" cy="192.308" r="10.745" fill="#1aacaa"/><circle cx="760.813" cy="483.821" r="15.187" fill="#E1E4E5"/><circle cx="266.345" cy="410.887" r="19.09" fill="#E1E4E5"/><circle cx="617.993" cy="130.767" r="15.162" transform="rotate(105 617.993 130.767)" fill="#E1E4E5"/><ellipse cx="138.979" cy="379.664" rx="15.516" ry="12.413" fill="#E1E4E5"/><circle cx="339.252" cy="529.682" r="24.765" transform="rotate(90 339.252 529.682)" fill="#E1E4E5"/><defs><linearGradient id="a" x1="551.672" y1="119.668" x2="421.109" y2="16.392" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#EEE"/></linearGradient></defs></svg> */}
                    <h1 className="form-urg-title ">
                        <FormattedMessage
                            id="form.title"
                            defaultMessage="Formulario de urgencias"
                        />
                    </h1>
                </div>
                {/* {
                isReady
                    ? <UrgenciasValidator formData={formData}/>
                    : ''
            } */}


                <form onSubmit={onSubmitHandle}>


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
                        <button className="btn-next" type="submit">
                            <FormattedMessage
                                id="form.send"
                                defaultMessage="Enviar"
                            />
                        </button>
                        :
                        <div>
                        <button className="btn-next" onClick={onHandleNext}>
                            <FormattedMessage
                                id="form.btnNext"
                                defaultMessage="Next"
                            />
                        </button>
                          <button onClick={onHandlePrev}>
                          <FormattedMessage
                              id="form.btnNext"
                              defaultMessage="Next"
                          />
                      </button>
                      </div>
                    }


                </form>

            </div>
        </>
    );

};








