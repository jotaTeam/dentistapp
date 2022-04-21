import { FormattedMessage, useIntl } from "react-intl";
import { useContext } from "react";
import { AppointmentContext } from "./Appointment.context";

export const PersonalDataDate = () => {

    const intl = useIntl();


    const pamirar = useContext(AppointmentContext);

    // console.log(pamirar);

    // const {name,surname,telephone,dni} = props
    // console.log(name);
   
    return (
        <div className="personal-form">
        <h3>
            <FormattedMessage
                id="form.data"
                defaultMessage="Datos personales"
            />
        </h3>

        <section>
            <label>
                <FormattedMessage
                    id="form.name"
                    defaultMessage="Nombre:"
                />
            </label>
            <input
                placeholder={intl.formatMessage({id: 'form.placeName'})}
                type="text"
                // onChange={handleInputChange}
                // value={formData.name}
                name="name"
                required
            />
        </section> 

        <section>
            <label>
                <FormattedMessage
                    id="form.surname"
                    defaultMessage="Apellidos:"
                />
            </label>
            <input
                placeholder={intl.formatMessage({id: 'form.placeLastname'})}
                type="text"
                // onChange={handleInputChange}
                // value={formData.surname}
                name="surnames"
                required
            />
        </section>   


        <section>
            <label>
                <FormattedMessage
                    id="form.dni"
                    defaultMessage="DNI:"
                />

            </label>
            <input
                placeholder={intl.formatMessage({id: 'form.placeDNI'})}
                type="text"
                // onChange={handleInputChange}
                // value={formData.dni}
                name="dni"
                required
            />
        </section>   

        <section>
            <label>
                <FormattedMessage
                    id="form.telephone"
                    defaultMessage="Teléfono:"
                />
            </label>
            <input
                placeholder={intl.formatMessage({id: 'form.placePhone'})}
                type="text"
                // onChange={handleInputChange}
                // value={formData.telephone}
                name="phone"
                required
            />
        </section>  
    </div>
  
    )
}
