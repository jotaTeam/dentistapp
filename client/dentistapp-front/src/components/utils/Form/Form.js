import React, { useState } from "react";
import { useForm } from '../../../hooks/useForm';
import { FormattedMessage } from "react-intl";
import { PersonalData } from "./PersonalData";
import { MedicalData } from "./MedicalData";
import { Symptoms } from "./Symptoms";
import { Causes } from "./Causes";
import '../../../assets/styles/form.css';
import { UrgenciasValidator } from "../validators/UrgenciasValidator";
import { PainLocation } from "./PainLocation";



export const Form = () => {

    const [formData, handleInputChange ] = useForm({

    });

    let pain =false;

    //const [isReady, setIsReady] = useState(false);

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
                    />,
        <Causes
            formData={formData}
            handleInputChange={handleInputChange}
        />
    ];

    const [position, setPosition] = useState(0);
    

    const onHandleNext = (e) => {
        setPosition(position + 1);
    }
    

    const onSubmitHandle = (e) => {
        e.preventDefault();
        //console.log(formData);
    };


    return (

        <>
        <div className='under-background-form'></div>

        <div className="formCont">

           {/* {
                isReady
                    ? <UrgenciasValidator formData={formData}/>
                    : ''
            } */}


            <form onSubmit={onSubmitHandle}>
                <h1 className="form-urg-title">
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
        <button className="btn-next" onClick={onHandleNext}>
        <FormattedMessage
                        id="form.btnNext"
                        defaultMessage="Formulario de urgencias"
                    />
        </button>

                
            </form>
         
        </div>
        </>
    );

};

 /**********************pasar a formato "React": ***********************
    const formSection  = document.querySelectorAll(".form-section");
    for(let i=0; i<formSection.length; i++){

        formSection[i].style.display="none";  
        formSection[0].style.display="flex";  
    }

    //formSection[0].style.display="flex";


 **********************************************************************/ 


    
    
          
      
