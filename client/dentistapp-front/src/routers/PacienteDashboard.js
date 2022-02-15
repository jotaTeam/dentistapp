import { Routes, Route, NavLink } from "react-router-dom";
import { PacienteHome } from "../components/paciente/PacienteHome";
import { Cita } from "../components/paciente/Cita";
import { Nav } from "../components/utils/nav";

export const PacienteDashboard = () => {
    return (
        <>
            

            <Nav />


            {/* Esta parte se puede convertir en un <div> y así controlar el estilo del contenido */}


            <Routes>

                
                <Route path="/" element={<PacienteHome />} />
                <Route path="/citas" element={<Cita />} />
                <Route path= "/*" element = {<NotFound/>}/>
                

            </Routes>
        </>
    )
}
