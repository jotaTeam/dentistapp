import { FormattedMessage } from "react-intl";

export const Symptoms = ({handleInputChange, formData}) => {

    return (
        <div>
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
        </div>
    )
}

