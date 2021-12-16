import { Routes, Route } from "react-router-dom";
import { AdminHome } from "../components/admin/AdminHome";
import { CitasList } from '../components/admin/CitasList';
import { ControlHoras } from '../components/admin/ControlHoras';
import { UrgenciasList } from '../components/admin/UrgenciasList';

export const AdminDashboard = () => {
    return (
        <>

            {/* TODO: Aquí iría el navbar */}


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
