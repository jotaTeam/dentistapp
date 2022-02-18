

const CausesList = ({ props }) => {

    const {
        
        cavity,
        fracture,
        gums_problems,
        oral_hygiene,
        oral_disease,
        oral_trauma,
        otherCauses,









    } = props


    return (
        <>
            <table>
                Causes
                {
                    otherCauses &&
                    (
                        <ul>{otherCauses}</ul>
                    )
                }

                {

                    cavity &&
                    (
                        <ul>cavityu</ul>
                    )
                }

                { fracture&& 
                (
                    <ul>fracturi</ul>
                )}
                { gums_problems&& 
                (
                    <ul>gumanazo</ul>
                )}
                { oral_hygiene&& 
                (
                    <ul>higienazo</ul>
                )}
                {oral_disease && 
                (
                    <ul>oralazo</ul>
                )}
                { oral_trauma&& 
                (
                    <ul>traumazo</ul>
                )}

            </table>
        </>
    )
}

export default CausesList