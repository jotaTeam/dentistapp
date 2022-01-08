import React, { useState } from "react";
import { useForm } from '../../../hooks/useForm';
import { FormattedMessage } from "react-intl";

import '../../../assets/styles/form.css';
import { UrgenciasValidator } from "../validators/UrgenciasValidator";

export const Form = () => {

    const [formData, handleInputChange] = useForm({

    });

    const [isReady, setIsReady] = useState(false);



    const onSubmitHandle = (e) => {
        e.preventDefault();

        console.log(formData);

        setIsReady(true);


    };


    return (


        <div>



            {
                isReady
                    ? <UrgenciasValidator formData={formData}/>
                    : <p>Envíe el formulario</p>
            }



            <form onSubmit={onSubmitHandle}>
                <h1>
                    <FormattedMessage
                        id="form.title"
                        defaultMessage="Formulario de urgencias"
                    />
                </h1>

                {/* DATOS PERSONALES */}
                <div>
                    <h3>
                        <FormattedMessage
                            id="form.data"
                            defaultMessage="Datos personales"
                        />
                    </h3>

                    <div className="datos">
                        <label>
                            <FormattedMessage
                                id="form.name"
                                defaultMessage="Nombre:"
                            />
                        </label>
                        <input
                            type="text"
                            onChange={handleInputChange}
                            value={formData.name}
                            name="name"
                        />
                        <br />

                        <label>
                            <FormattedMessage
                                id="form.surname"
                                defaultMessage="Apellidos:"
                            />
                        </label>
                        <input type="text"
                            onChange={handleInputChange}
                            value={formData.surnames}
                            name="surnames"
                        />
                        <br />

                        <label>
                            <FormattedMessage
                                id="form.dni"
                                defaultMessage="DNI:"
                            />

                        </label>
                        <input type="text"
                            onChange={handleInputChange}
                            value={formData.dni}
                            name="dni"
                        />
                        <br />
                        <label>
                            <FormattedMessage
                                id="form.telephone"
                                defaultMessage="Teléfono:"
                            />
                        </label>
                        <input type="text"
                            onChange={handleInputChange}
                            value={formData.phone}
                            name="phone"
                        />
                        <br />
                    </div>

                </div>
                <hr />

                {/* PATOLOGÍAS Y ALERGIAS */}
                <div>
                    <h3>
                        <FormattedMessage
                            id="form.pathology"
                            defaultMessage=" ¿Ha tenido alguna patología oral previa o la presenta en la actualidad?"
                        />
                    </h3>

                    <input
                        type="radio"
                        onChange={handleInputChange}
                        value="true"
                        name="pathology"
                    />
                    <label>
                        <FormattedMessage
                            id="form.yes"
                            defaultMessage="Sí"
                        />
                    </label>
                    <br />

                    <input type="radio"
                        onChange={handleInputChange}
                        value="false"
                        name="pathology"
                        defaultChecked />

                    <label>
                        <FormattedMessage
                            id="form.no"
                            defaultMessage="No"
                        />
                    </label>
                    <br />

                    <label>
                        <FormattedMessage
                            id="form.specify"
                            defaultMessage="En caso afirmativo, especificar patologías:"
                        />
                    </label>
                    <input type="text"
                        onChange={handleInputChange}
                        value={formData.descriptionPathology}
                        name="descriptionPathology"
                    />
                    <br />
                </div>
                <hr />

                <div>
                    <h3>
                        <FormattedMessage
                            id="form.allergy"
                            defaultMessage="¿Es alérgico algún alimento/medicamento/producto?"
                        />
                    </h3>

                    <input type="radio"
                        onChange={handleInputChange}
                        value="true"
                        name="allergy"
                    />
                    <label >
                        <FormattedMessage
                            id="form.yes"
                            defaultMessage="Sí"
                        />
                    </label>
                    <br />

                    <input type="radio"
                        onChange={handleInputChange}
                        value="false"
                        name="allergy"
                        defaultChecked />
                    <label >
                        <FormattedMessage
                            id="form.no"
                            defaultMessage="No"
                        />
                    </label>
                    <br />

                    <label>
                        <FormattedMessage
                            id="form.specify"
                            defaultMessage="En caso afirmativo, especificar alergias:"
                        />
                    </label>
                    <input type="text"
                        onChange={handleInputChange}
                        value={formData.descriptionAllergy}
                        name="descriptionAllergy"
                    />
                    <br />
                </div>
                <hr />

                {/* SÍNTOMAS Y SIGNOS */}
                <div>
                    <h3>
                        <FormattedMessage
                            id="form.symptoms"
                            defaultMessage="Síntomas y signos"
                        />
                    </h3>

                    <label for="bleeding">
                        <FormattedMessage
                            id="form.symptoms.bleeding"
                            defaultMessage="Sangrado"
                        />
                    </label>
                    <input type="checkbox"
                        onChange={handleInputChange}
                        name="bleeding"
                        value="true" />

                    <label for="pain">
                        <FormattedMessage
                            id="form.symptoms.pain"
                            defaultMessage="Dolor"
                        />
                    </label>
                    <input type="checkbox"
                        onChange={handleInputChange}
                        name="pain"
                        value="true" />

                    <label for="dental_movility">
                        <FormattedMessage
                            id="form.symptoms.dentalmov"
                            defaultMessage="Movilidad dentaria"
                        />
                    </label>
                    <input type="checkbox"
                        onChange={handleInputChange}
                        name="dental_movility"
                        value="true" />

                    <label for="ulcer">
                        <FormattedMessage
                            id="form.symptoms.ulcers"
                            defaultMessage="Úlceras"
                        />
                    </label>
                    <input type="checkbox"
                        onChange={handleInputChange}
                        name="ulcer"
                        value="true" />

                    <label for="dental_stains">
                        <FormattedMessage
                            id="form.symptoms.dentalstains"
                            defaultMessage="Manchas dentales"
                        />
                    </label>
                    <input type="checkbox"
                        onChange={handleInputChange}
                        name="dental_stains"
                        value="true" />

                    <label for="gums_inflammations">
                        <FormattedMessage
                            id="form.symptoms.gums"
                            defaultMessage="Inflamación de encías"
                        />
                    </label>
                    <input type="checkbox"
                        onChange={handleInputChange}
                        name="gums_inflammations"
                        value="true" />

                    <label for="bad_breath">
                        <FormattedMessage
                            id="form.symptoms.badbreath"
                            defaultMessage="Mal aliento"
                        />

                    </label>
                    <input type="checkbox"
                        onChange={handleInputChange}
                        name="bad_breath"
                        value="true" />

                    <label for="sensibility">
                        <FormattedMessage
                            id="form.symptoms.sensitivity"
                            defaultMessage="Sensibilidad"
                        />

                    </label>
                    <input type="checkbox"
                        onChange={handleInputChange}
                        name="sensibility"
                        value="true" />

                    <br />

                    <label>
                        <FormattedMessage
                            id="form.others"
                            defaultMessage="Otros:"
                        />
                    </label>
                    <input type="text"
                        onChange={handleInputChange}
                        value={formData.otherSimptoms}
                        name="otherSimptoms"
                    />
                    <br />
                </div>
                <hr />

                {/* LOCALIZACIÓN DEL DOLOR */}

                <h3>
                    <FormattedMessage
                        id="form.location"
                        defaultMessage="Localización del dolor:"
                    />
                </h3>

                <input type="text"
                    onChange={handleInputChange}
                    value={formData.pain_zone}
                    name="pain_zone"
                    placeholder="Aquí va una boca "
                />
                <br />
                <hr />

                {/* CAUSAS */}
                <div>
                    <h3>
                        <FormattedMessage
                            id="form.cause"
                            defaultMessage="¿A qué lo asocia?"
                        />
                    </h3>

                    <label for="cavity">
                        <FormattedMessage
                            id="form.cause.cavity"
                            defaultMessage="Caries"
                        />
                    </label>
                    <input type="checkbox"
                        onChange={handleInputChange}
                        name="cavity"
                        value="true" />

                    <label for="fracture">
                        <FormattedMessage
                            id="form.cause.fracture"
                            defaultMessage="Fractura"
                        />
                    </label>
                    <input type="checkbox"
                        onChange={handleInputChange}
                        name="fracture"
                        value="true" />

                    <label for="gums_problems">
                        <FormattedMessage
                            id="form.cause.gums"
                            defaultMessage="Problemas de encías"
                        />
                    </label>
                    <input type="checkbox"
                        onChange={handleInputChange}
                        name="gums_problems"
                        value="true" />

                    <label for="oral_hygiene">
                        <FormattedMessage
                            id="form.cause.hygiene"
                            defaultMessage="Productos de higiene oral"
                        />
                    </label>
                    <input type="checkbox"
                        onChange={handleInputChange}
                        name="oral_hygiene"
                        value="true" />

                    <label for="oral_disease">
                        <FormattedMessage
                            id="form.cause.diseases"
                            defaultMessage="Enfermedades orales (cáncer oral, herpes labial…)"
                        />
                    </label>
                    <input type="checkbox"
                        onChange={handleInputChange}
                        name="oral_disease"
                        value="true" />

                    <label for="oral_trauma">
                        <FormattedMessage
                            id="form.cause.trauma"
                            defaultMessage="Traumatismo oral"
                        />
                    </label>
                    <input type="checkbox"
                        onChange={handleInputChange}
                        name="oral_trauma"
                        value="true" />

                    <br />

                    <label>
                        <FormattedMessage
                            id="form.others"
                            defaultMessage="Otros:"
                        />
                    </label>
                    <input type="text"
                        onChange={handleInputChange}
                        value={formData.otherCauses}
                        name="otherCauses"
                    />
                </div>

                <button className="boton" type="submit">
                    <FormattedMessage
                        id="form.send"
                        defaultMessage="Enviar"
                    />
                </button>
            </form>
        </div>

    );

};
