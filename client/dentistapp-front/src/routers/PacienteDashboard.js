import { Routes, Route } from "react-router-dom";
import { PacienteHome } from "../components/paciente/PacienteHome";
import { Cita } from "../components/paciente/Cita";

export const PacienteDashboard = () => {
    return (
        <>
            {/* TODO: Aquí iría el navbar */}


            {/* Esta parte se puede convertir en un <div> y así controlar el estilo del contenido */}


            <Routes>

                
                <Route path="/" element={<PacienteHome />} />
                <Route path="/citas" element={<Cita />} />
                

            </Routes>
        </>
    )
}
