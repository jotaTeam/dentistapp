import { FormattedMessage } from "react-intl";

export const PersonalData = ({handleInputChange, formData}) => {
    

    return (
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
                    value={formData.surname}
                    name="surname"
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
                    value={formData.telephone}
                    name="telephone"
                />
                <br />
            </div>
        </div>
    )
}

