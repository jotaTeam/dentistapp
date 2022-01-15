import { FormattedMessage } from "react-intl";
import { useForm } from '../../../hooks/useForm';


export const PainLocation = () => {

    const [formData, handleInputChange] = useForm({

    });

    return (
        <div>
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
        </div>
    )
}

