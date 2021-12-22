import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";

import '../../assets/styles/form.css'

export const Form = () => {

    const [formData, handleInputChange] = useForm({

    });

    const onSubmitHandle = (e) => {
        e.preventDefault();

        console.log(formData);
    }


    return (
        <form onSubmit={onSubmitHandle}>
            <h1>Formulario de urgencias</h1>

            <div>
                <h3>Datos personales</h3>

                <div className="datos">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        onChange={handleInputChange}
                        value={formData.name}
                        name="name"
                    />
                    <br />

                    <label>Apellidos:</label>
                    <input type="text"
                        onChange={handleInputChange}
                        value={formData.surname}
                        name="surname"
                    />
                    <br />

                    <label>DNI:</label>
                    <input type="text"
                        onChange={handleInputChange}
                        value={formData.dni}
                        name="dni"
                    />
                    <br />
                    <label>Teléfono:</label>
                    <input type="text"
                        onChange={handleInputChange}
                        value={formData.telephone}
                        name="telephone"
                    />
                    <br />
                </div>

            </div>
            <hr />

            <div>
                <h3>¿Ha tenido alguna patología oral previa o la presenta en la actualidad?</h3>

                <input
                    type="radio"
                    onChange={handleInputChange}
                    value="true"
                    name="pathology"
                />
                <label>Sí</label>
                <br />

                <input type="radio"
                    onChange={handleInputChange}
                    value="false"
                    name="pathology"
                    defaultChecked />
                <label>No</label>
                <br />

                <label>En caso afirmativo, especificar patologías:</label>
                <input type="text"
                    onChange={handleInputChange}
                    value={formData.descriptionPathology}
                    name="descriptionPathology"
                />
                <br />
            </div>
            <hr />

            <div>
                <h3>¿Es alérgico algún alimento/medicamento/producto?</h3>

                <input type="radio"
                    onChange={handleInputChange}
                    value="true"
                    name="allergy"
                />
                <label >Sí</label>
                <br />

                <input type="radio"
                    onChange={handleInputChange}
                    value="false"
                    name="allergy"
                    defaultChecked />
                <label >No</label>
                <br />

                <label>En caso afirmativo, especificar alergias:</label>
                <input type="text"
                    onChange={handleInputChange}
                    value={formData.descriptionAllergy}
                    name="descriptionAllergy"
                />
                <br />
            </div>
            <hr />

            <div>
                <h3>Síntomas y signos</h3>

                <input type="checkbox"
                    onChange={handleInputChange}
                    name="bleeding"
                    value="true" />
                <label for="bleeding"> Sangrado</label>

                <input type="checkbox"
                    onChange={handleInputChange}
                    name="pain"
                    value="true" />
                <label for="pain"> Dolor</label>


                <input type="checkbox"
                    onChange={handleInputChange}
                    name="dental_movility"
                    value="true" />
                <label for="dental_movility"> Movilidad dentaria</label>


                <input type="checkbox"
                    onChange={handleInputChange}
                    name="ulcer"
                    value="true" />
                <label for="ulcer"> Úlceras</label>


                <input type="checkbox"
                    onChange={handleInputChange}
                    name="dental_stains"
                    value="true" />
                <label for="dental_stains"> Manchas dentales</label>

                <input type="checkbox"
                    onChange={handleInputChange}
                    name="gums_inflammations"
                    value="true" />
                <label for="gums_inflammations"> Inflamación de encías</label>

                <input type="checkbox"
                    onChange={handleInputChange}
                    name="bad_breath"
                    value="true" />
                <label for="bad_breath"> Mal aliento</label>

                <input type="checkbox"
                    onChange={handleInputChange}
                    name="sensibility"
                    value="true" />
                <label for="sensibility"> Sensibilidad</label>
                <br />

                <label>Otros:</label>
                <input type="text"
                    onChange={handleInputChange}
                    value={formData.otherSimptoms}
                    name="otherSimptoms"
                />
                <br />
            </div>
            <hr />

            <h3>Localización del dolor:</h3>
            <input type="text"
                onChange={handleInputChange}
                value={formData.pain_zone}
                name="pain_zone"
                placeholder="Aquí va una boca "
            />
            <br />
            <hr />

            <div>
                <h3>¿A qué lo asocia?</h3>

                <input type="checkbox"
                    onChange={handleInputChange}
                    name="cavity"
                    value="true" />
                <label for="cavity"> Caries</label>

                <input type="checkbox"
                    onChange={handleInputChange}
                    name="fracture"
                    value="true" />
                <label for="fracture"> Fractura</label>

                <input type="checkbox"
                    onChange={handleInputChange}
                    name="gums_problems"
                    value="true" />
                <label for="gums_problems"> Problemas de encías</label>

                <input type="checkbox"
                    onChange={handleInputChange}
                    name="oral_hygiene"
                    value="true" />
                <label for="oral_hygiene"> Productos de higiene oral</label>

                <input type="checkbox"
                    onChange={handleInputChange}
                    name="oral_disease"
                    value="true" />
                <label for="oral_disease"> Enfermedades orales (cáncer oral, herpes labial…)</label>

                {/*Creo que falta la causa de traumatismo oral en la BBDD*/}
                <input type="checkbox"
                    onChange={handleInputChange}
                    name="oral_trauma"
                    value="true" />
                <label for="oral_trauma"> Traumatismo oral</label>
                <br/>

                <label>Otros:</label>
                <input type="text"
                    onChange={handleInputChange}
                    value={formData.otherCauses}
                    name="otherCauses"
                />
            </div>

            <input className = "boton" type="submit" value="Envíame" />
        </form>

    )

}
