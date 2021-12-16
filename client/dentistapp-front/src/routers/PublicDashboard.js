import { Routes, Route } from "react-router-dom";
import { Urgencias } from "../components/Urgencias";
import { Login } from "../components/Login";
import { Home } from "../components/Home";


export const PublicDashboard = () => {
    return (
        <>

            {/* TODO: Aquí iría el navbar */}


            {/* Esta parte se puede convertir en un <div> y así controlar el estilo del contenido */}

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/urgencias" element={<Urgencias />} />

            </Routes>


        </>
    );
};
