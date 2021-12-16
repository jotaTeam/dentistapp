import { Routes, Route, NavLink } from "react-router-dom";
import { AdminHome } from "../components/admin/AdminHome";
import { CitasList } from '../components/admin/CitasList';
import { ControlHoras } from '../components/admin/ControlHoras';
import { UrgenciasList } from '../components/admin/UrgenciasList';

export const AdminDashboard = () => {
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

                
                <Route path="/" element={<AdminHome />} />
                <Route path="/urgenciaslist" element={<UrgenciasList />} />
                <Route path="/citaslist" element={<CitasList />} />
                <Route path="/control" element={<ControlHoras />} />

            </Routes>

        </>
    );
};
