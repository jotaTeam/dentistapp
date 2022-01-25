import { FormattedMessage, useIntl } from "react-intl";

export const Causes = ({handleInputChange, formData}) => {
    const intl = useIntl();
    return (
            <div className="symptom-form">
                <h3>
                    <FormattedMessage
                        id="form.cause"
                        defaultMessage="¿A qué lo asocia?"
                    />
                </h3>
                <div class="symptom-options">
               
                <input type="checkbox"
                    onChange={handleInputChange}
                    name="cavity"
                    value="true" 
                    id="cavity"/>

                <label for="cavity">
                    <FormattedMessage
                        id="form.cause.cavity"
                        defaultMessage="Caries"
                    />
                </label>

               
                <input type="checkbox"
                    onChange={handleInputChange}
                    name="fracture"
                    value="true"
                    id="fracture" />

                 <label for="fracture">
                    <FormattedMessage
                        id="form.cause.fracture"
                        defaultMessage="Fractura"
                    />
                </label>

                
                <input type="checkbox"
                    onChange={handleInputChange}
                    name="gums_problems"
                    value="true"
                    id="gums_problems" />

                <label for="gums_problems">
                    <FormattedMessage
                        id="form.cause.gums"
                        defaultMessage="Problemas de encías"
                    />
                </label>

               
                <input type="checkbox"
                    onChange={handleInputChange}
                    name="oral_hygiene"
                    value="true"
                    id="oral_hygiene" />
                
                <label for="oral_hygiene">
                    <FormattedMessage
                        id="form.cause.hygiene"
                        defaultMessage="Productos de higiene oral"
                    />
                </label>

              
                <input type="checkbox"
                    onChange={handleInputChange}
                    name="oral_disease"
                    value="true"
                    id="oral_disease" />

                <label for="oral_disease" className="oral-disease-label" title={intl.formatMessage({id: 'form.cause.diseasesEx'})}>
                    <FormattedMessage
                        id="form.cause.diseases"
                        defaultMessage="Enfermedades orales (cáncer oral, herpes labial…)"
                    />
                    <span>
                    <FormattedMessage
                        id="form.cause.diseasesEx"
                        defaultMessage="Enfermedades orales (cáncer oral, herpes labial…)"
                    />
                    </span>
                </label>

                <input type="checkbox"
                    onChange={handleInputChange}
                    name="oral_trauma"
                    value="true"
                    id="oral_trauma" />

                 <label for="oral_trauma">
                    <FormattedMessage
                        id="form.cause.trauma"
                        defaultMessage="Traumatismo oral"
                    />
                </label>

            </div>

            <label className="other-label">
                    <FormattedMessage
                        id="form.others"
                        defaultMessage="Otros:"
                    />
                </label>
                <input type="text"
                    onChange={handleInputChange}
                    value={formData.otherCauses}
                    name="otherCauses"
                    placeholder={intl.formatMessage({id: 'form.otherCauses'})}

                />
            </div>
    )
}







