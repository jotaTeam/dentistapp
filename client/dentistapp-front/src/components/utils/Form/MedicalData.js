import { FormattedMessage, useIntl } from "react-intl";

export const MedicalData = ({handleInputChange, formData}) => {
    const intl = useIntl();

    return (
        <div className="medical-form">
            <div className="radio-options-form-cont">
                <h3>
                    <FormattedMessage
                        id="form.pathology"
                        defaultMessage=" ¿Ha tenido alguna patología oral previa o la presenta en la actualidad?"
                    />
                </h3>

                <section>
                <input
                    type="radio"
                    onChange={handleInputChange}
                    value={true}
                    name="pathology"
                    id="true-pathology"
                    checked={formData.pathology === 'true'}
                />
                <label htmlFor="true-pathology">
                    <FormattedMessage
                        id="form.yes"
                        defaultMessage="Sí"
                       
                    />
                </label>
                


                <input type="radio"
                    onChange={handleInputChange}
                    value={false}
                    name="pathology"
                    id="false-pathology"
                    checked={formData.pathology === 'false'}
                     />

                <label htmlFor="false-pathology">
                    <FormattedMessage
                        id="form.no"
                        defaultMessage="No"
                    />
                </label>
                </section>


                <div className="more-info-cont">
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
                    placeholder={intl.formatMessage({id: 'form.patologyPrev'})}

                />
                </div>
            </div>

            <div className="radio-options-form-cont">
                <h3>
                    <FormattedMessage
                        id="form.allergy"
                        defaultMessage="¿Es alérgico algún alimento/medicamento/producto?"
                    />
                </h3>

                <section>
                <input type="radio"
                    onChange={handleInputChange}
                    value={true}
                    name="allergy"
                    id="true-allergy"
                    checked={formData.allergy === 'true'}
                />
                <label htmlFor="true-allergy">
                    <FormattedMessage
                        id="form.yes"
                        defaultMessage="Sí"
                    />
                </label>
              

                <input type="radio"
                    onChange={handleInputChange}
                    value={false}
                    name="allergy"
                    id="false-allergy"
                    checked={formData.allergy === 'false'}
                     /> 
                <label htmlFor="false-allergy">
                    <FormattedMessage
                        id="form.no"
                        defaultMessage="No"
                    />
                </label>
                </section>

                <div className="more-info-cont">
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
                    placeholder={intl.formatMessage({id: 'form.allergyMore'})}

                />
                </div>
            </div>
        </div>
    )
}
