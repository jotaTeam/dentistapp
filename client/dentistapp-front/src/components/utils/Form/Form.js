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
import { Component } from "react";


export const Form = () => {
    //handleInputChange
    const [formData] = useForm({

    });

    const [isReady, setIsReady] = useState(false);

    /****************/
    const[setCounter] = useState();
    const show1 = () =>setCounter();
    const show2 = () =>setCounter();
    const show3 = () =>setCounter();
    const show4 = () =>setCounter();
    const show5 = () =>setCounter();
    /****************/

    const onSubmitHandle = (e) => {
        e.preventDefault();

        console.log(formData);

        setIsReady(true);


    };


    return (


        <div className="formCont">

            {
                isReady
                    ? <UrgenciasValidator formData={formData}/>
                    : ''
            }

            <section className="form-header"></section>

            <form onSubmit={onSubmitHandle}>
                <h1>
                    <FormattedMessage
                        id="form.title"
                        defaultMessage="Formulario de urgencias"
                    />
                </h1>


                {/**********************************************************************/ }
                {/* DATOS PERSONALES */}
                <section className="form-section personal">
                 <PersonalData></PersonalData>
                </section>
                {/* PATOLOGÍAS Y ALERGIAS */}
                <section className="form-section medical">
               <MedicalData></MedicalData>
                </section>
                {/* SÍNTOMAS Y SIGNOS */}
                <section className="form-section symptom">
               <Symptoms></Symptoms>
                </section>

                {/* LOCALIZACIÓN DEL DOLOR */}
                <section className="form-section pain">
                <PainLocation></PainLocation>
                </section>
                
                {/* CAUSAS */}
                <section className="form-section cause">
                 <Causes></Causes>
                </section>
                {/**********************************************************************/ }
              
                <button className="urgency-btn"  type="submit">
                    <FormattedMessage
                        id="form.send"
                        defaultMessage="Enviar"
                    />
                </button>
            </form>
           
           
            <section className="btn-form-footer">
                <button onClick={show1}>1</button>
                <button onClick={show2}>2</button>
                <button onClick={show3}>3</button>
                <button onClick={show4}>4</button>
                <button onClick={show5}>5</button>
            </section>
        </div>



           

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


    
    
          
      
