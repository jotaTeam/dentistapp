import { PersonalInfo } from "./PersonalInfo"
import SimptomsList from "./SimptomsList";

import '../../assets/styles/urgencias.css'
import CausesList from "./CausesList";

const mockUserInfo = {
    name: 'adriel',
    surname: 'arocha',
    dni: '2234234',
    telephone: 12345,
    pathology: false,
    descriptionPathology: 'mil cosa mils cosas',
    allergy: false,
    descriptionAllergy: 'mil cosa milllsllslsa',
    bleeding: false,
    pain: false,
    dental_movility: false,
    ulcer: false,
    dental_stains: false,
    gums_inflammations: false,
    bad_breath: false,
    sensibility: false,
    otherSimptoms: 'otros sintomitas',
    cavity:true,
    fracture:true,
    gums_problems:true,
    oral_hygiene:true,
    oral_disease:true,
    oral_trauma:true,
    otherCauses:true,
}

const PreSendInfo = () => {


    console.log(mockUserInfo);

    return (
        <>
            <PersonalInfo props={mockUserInfo}/>
            <SimptomsList props={mockUserInfo}/>
            <CausesList props={mockUserInfo} />
        </>
    )
}

export default PreSendInfo