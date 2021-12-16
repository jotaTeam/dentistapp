import { Routes, Route, NavLink } from "react-router-dom";
import { PacienteHome } from "../components/paciente/PacienteHome";
import { Cita } from "../components/paciente/Cita";

export const PacienteDashboard = () => {
    return (
        <>
            {/* TODO: Aquí iría el navbar */}

            <nav>

                <NavLink to="/">Home</NavLink>
                <br/>
                <NavLink to="/login">Login</NavLink>
                <br/>
                <NavLink to="/urgencias">Urgencias</NavLink>
                <br/>
                <NavLink to="/paciente/">Pacientes home</NavLink>
                <br/>
                <NavLink to="/paciente/citas">Citas</NavLink>
                <br/>
                <NavLink to="/admin/">Admin home</NavLink>
                <br/>
                <NavLink to="/admin/control">Admin control</NavLink>

            </nav>


            {/* Esta parte se puede convertir en un <div> y así controlar el estilo del contenido */}


            <Routes>

                
                <Route path="/" element={<PacienteHome />} />
                <Route path="/citas" element={<Cita />} />
                

            </Routes>
        </>
    )
}
