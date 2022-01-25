import { FormattedMessage, useIntl } from "react-intl";

export const Symptoms = ({handleInputChange, formData}) => {
    const intl = useIntl();
    return (
        <div className="symptom-form">
            
                <h3>
                    <FormattedMessage
                        id="form.symptoms"
                        defaultMessage="Síntomas y signos"
                    />
                </h3>
            
            <div class="symptom-options">
                <input type="checkbox"
                    onChange={handleInputChange}
                    name="bleeding"
                    value="true"
                    id="bleeding" />
                <label for="bleeding">
                    <FormattedMessage
                        id="form.symptoms.bleeding"
                        defaultMessage="Sangrado"
                    />
                </label>    

                <input type="checkbox"
                    onChange={handleInputChange}
                    name="pain"
                    value="true"
                    id="pain" />

                 <label for="pain">
                    <FormattedMessage
                        id="form.symptoms.pain"
                        defaultMessage="Dolor"
                    />
                </label>

                <input type="checkbox"
                    onChange={handleInputChange}
                    name="dental_movility"
                    value="true"
                    id="dental_movility" />

                <label for="dental_movility">
                    <FormattedMessage
                        id="form.symptoms.dentalmov"
                        defaultMessage="Movilidad dentaria"
                    />
                </label>

                <input type="checkbox"
                    onChange={handleInputChange}
                    name="ulcer"
                    value="true"
                    id="ulcer" />

                <label for="ulcer">
                    <FormattedMessage
                        id="form.symptoms.ulcers"
                        defaultMessage="Úlceras"
                    />
                </label>

                
                <input type="checkbox"
                    onChange={handleInputChange}
                    name="dental_stains"
                    value="true"
                    id="dental_stains" />

                <label for="dental_stains">
                    <FormattedMessage
                        id="form.symptoms.dentalstains"
                        defaultMessage="Manchas dentales"
                    />
                </label>

                <input type="checkbox"
                    onChange={handleInputChange}
                    name="gums_inflammations"
                    value="true"
                    id="gums_inflammations" />

                <label for="gums_inflammations">
                    <FormattedMessage
                        id="form.symptoms.gums"
                        defaultMessage="Inflamación de encías"
                    />
                </label>

                
                <input type="checkbox"
                    onChange={handleInputChange}
                    name="bad_breath"
                    value="true"
                    id="bad_breath" />

                <label for="bad_breath">
                    <FormattedMessage
                        id="form.symptoms.badbreath"
                        defaultMessage="Mal aliento"
                    />

                </label>

               
                <input type="checkbox"
                    onChange={handleInputChange}
                    name="sensibility"
                    value="true"
                    id="sensibility"/>

                 <label for="sensibility">
                    <FormattedMessage
                        id="form.symptoms.sensitivity"
                        defaultMessage="Sensibilidad"
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
                    value={formData.otherSimptoms}
                    name="otherSimptoms"
                    id="otherSimptoms"
                    placeholder={intl.formatMessage({id: 'form.otherSymptoms'})}
                />    
        </div>
    )
}

