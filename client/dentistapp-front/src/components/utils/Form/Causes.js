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
                <div className="symptom-options">
               
                <input type="checkbox"
                    onChange={handleInputChange}
                    name="cavity"
                    value="true" 
                    id="cavity"
                    checked={formData.cavity === 'true'}
                    />

                <label htmlFor="cavity">
                    <FormattedMessage
                        id="form.cause.cavity"
                        defaultMessage="Caries"
                    />
                </label>

               
                <input type="checkbox"
                    onChange={handleInputChange}
                    name="fracture"
                    value="true"
                    id="fracture" 
                    checked={formData.fracture === 'true'}
                    />

                 <label htmlFor="fracture">
                    <FormattedMessage
                        id="form.cause.fracture"
                        defaultMessage="Fractura"
                    />
                </label>

                
                <input type="checkbox"
                    onChange={handleInputChange}
                    name="gums_problems"
                    value="true"
                    id="gums_problems"
                    checked={formData.gums_problems === 'true'}
                    />

                <label htmlFor="gums_problems">
                    <FormattedMessage
                        id="form.cause.gums"
                        defaultMessage="Problemas de encías"
                    />
                </label>

               
                <input type="checkbox"
                    onChange={handleInputChange}
                    name="oral_hygiene"
                    value="true"
                    id="oral_hygiene"
                    checked={formData.oral_hygiene === 'true'}
                    />
                
                <label htmlFor="oral_hygiene">
                    <FormattedMessage
                        id="form.cause.hygiene"
                        defaultMessage="Productos de higiene oral"
                    />
                </label>

              
                <input type="checkbox"
                    onChange={handleInputChange}
                    name="oral_disease"
                    value="true"
                    id="oral_disease"
                    checked={formData.oral_disease === 'true'}
                    />

                <label htmlFor="oral_disease" className="oral-disease-label" title={intl.formatMessage({id: 'form.cause.diseasesEx'})}>
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
                    id="oral_trauma"
                    checked={formData.oral_trauma === 'true'}
                    />

                 <label htmlFor="oral_trauma">
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







