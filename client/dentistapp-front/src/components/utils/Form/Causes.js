import { FormattedMessage } from "react-intl";
import { useForm } from '../../../hooks/useForm';

export const Causes = () => {

    const [formData, handleInputChange] = useForm({

    });

    return (
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
    )
}







