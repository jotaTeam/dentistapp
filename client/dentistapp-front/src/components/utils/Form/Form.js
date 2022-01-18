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

    //const [isReady, setIsReady] = useState(false);

   /* const componentList = [
        <PersonalData
            handleInputChange={handleInputChange}
            formData={formData}/>,
        <Symptoms
            handleInputChange={handleInputChange}
            formData={formData}/>,
        <PainLocation
            handleInputChange={handleInputChange}
            formData={formData}/>,
        <MedicalData
            handleInputChange={handleInputChange}
            formData={formData}/>,
        <Causes
            handleInputChange={handleInputChange}
            formData={formData}/>, 
        <MedicalData
            handleInputChange={handleInputChange}
            formData={formData}/>,
        <UrgenciasValidator
            formData={formData}/>
            
    ];*/

    const [{value,firstPosition}, setPosition] = useState({value=0, firstPosition=true});
    //const [firstPosition, setFirstPosition] = useState(true);

    //alert(firstPosition);

   // const [chargedComponent, setchargedComponent] = useState(componentList[position]);

   /*  const onHandleNext = ()=>{
        setPosition(position =>position +1 );
        alert("position" + position)
    
    setchargedComponent(componentList[position]);
    
     }*/
    

     const onHandleNext = ()=>{
        //alert(firstPosition);

        

        //alert(firstPosition);

        setPosition(value + 1 );
        if(value!==0){
            setPosition(firstPosition=false);
        }
      
     }

  

    const onSubmitHandle = (e) => {
        e.preventDefault();
    };


    return (


        <div className="formCont">

           {/* {
                isReady
                    ? <UrgenciasValidator formData={formData}/>
                    : ''
            } */}

            <section className="form-header"></section>

            <form onSubmit={onSubmitHandle}>
                <h1>
                    <FormattedMessage
                        id="form.title"
                        defaultMessage="Formulario de urgencias"
                    />
                </h1>


            
                {/* {chargedComponent                    
                } */}

              
              

                {/* <button className="urgency-btn"  type="submit">
                    <FormattedMessage
                        id="form.send"
                        defaultMessage="Enviar"
                    />
                </button> */}

                {
                firstPosition 
                    ? <PersonalData 
                    handleInputChange={handleInputChange}
                    formData={formData}/>
                    : ''
                }
                     {
                position ===2
                    ? <Symptoms 
                    handleInputChange={handleInputChange}
                    formData={formData}/>
                    : ''
                }
                {
                position ===3
                    ? <PainLocation 
                    handleInputChange={handleInputChange}
                    formData={formData}/>
                    : ''
                }
                {
                position ===4
                    ? <MedicalData 
                    handleInputChange={handleInputChange}
                    formData={formData}/>
                    : ''
                }
                {
                position ===5
                    ? <Causes 
                    handleInputChange={handleInputChange}
                    formData={formData}/>
                    : ''
                }
                {
                position ===6
                    ? <UrgenciasValidator 
                    formData={formData}/>
                    : ''
                }

        <button onClick={onHandleNext}>Next</button>

                
            </form>
         
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


    
    
          
      
