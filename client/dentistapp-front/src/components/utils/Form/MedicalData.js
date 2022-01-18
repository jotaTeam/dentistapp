import { FormattedMessage } from "react-intl";

export const MedicalData = ({handleInputChange, formData}) => {

    return (
        <div>
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
        </div>
    )
}
