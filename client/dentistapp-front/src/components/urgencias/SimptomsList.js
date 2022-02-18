

const SimptomsList = ({ props }) => {

    const {
        allergy,
        descriptionAllergy,
        bleeding,
        pain,
        dental_movility,
        ulcer,
        dental_stains,
        gums_inflammations,
        bad_breath,
        sensibility,
    } = props


    return (
        <>
            <table>
                Symptoms
                {
                    allergy &&
                    (
                        <ul>{descriptionAllergy}</ul>
                    )
                }

                {

                    bleeding &&
                    (
                        <ul>sangrado</ul>
                    )
                }

                {pain && 
                (
                    <ul>painazo</ul>
                )}
                {dental_movility && 
                (
                    <ul>dentalazo</ul>
                )}
                {ulcer && 
                (
                    <ul>ulcerazo</ul>
                )}
                {dental_stains && 
                (
                    <ul>stainazo</ul>
                )}
                {gums_inflammations && 
                (
                    <ul>gumanazo</ul>
                )}
                {bad_breath && 
                (
                    <ul>breathazo</ul>
                )}
                {sensibility && 
                (
                    <ul>sensibiltazo</ul>
                )}





            </table>
        </>
    )
}

export default SimptomsList