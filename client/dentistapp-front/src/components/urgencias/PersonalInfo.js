

export const PersonalInfo = ({props}) => {

   

    const {name,surname,telephone,dni} = props
    console.log(name);
    return (
        <div className ='cajita'>
            <div>
                <div>name</div>
                <input value={name} />
            </div>

            <div>
                <div>telephone</div>
                <input value={telephone} />
            </div>
            <div>
                <div>surname</div>
                <input value={surname} />
            </div>
            <div>
                <div>dni</div>
                <input value={dni} />
            </div>
        </div>
    )
}
