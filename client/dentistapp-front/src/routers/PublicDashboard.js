import { Routes, Route } from "react-router-dom";
import { Urgencias } from "../components/Urgencias";
import { Login } from "../components/login/Login";
import { Home } from "../components/Home";
import { Nav } from "../components/utils/nav";
import LanguageSelector from "../components/LanguageSelector";
import { NotFound } from "../components/NotFound";
import PreSendInfo from "../components/urgencias/PreSendInfo";


export const PublicDashboard = () => {
    return (
        <>

            <Nav />
            <LanguageSelector />


            {/* Esta parte se puede convertir en un <div> y así controlar el estilo del contenido */}

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/urgencias" element={<Urgencias />} />
                <Route path='/show' element={<PreSendInfo/>} />
                <Route path= "/*" element = {<NotFound/>}/>

            </Routes>


        </>
    );
};
