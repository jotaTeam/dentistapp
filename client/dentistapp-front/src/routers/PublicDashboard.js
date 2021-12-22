import { Routes, Route, NavLink } from "react-router-dom";
import { Urgencias } from "../components/Urgencias";
import { Login } from "../components/login/Login";
import { Home } from "../components/Home";
import { Nav } from "../components/utils/Nav";


export const PublicDashboard = () => {
    return (
        <>

            <Nav />


            {/* Esta parte se puede convertir en un <div> y así controlar el estilo del contenido */}

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/urgencias" element={<Urgencias />} />

            </Routes>


        </>
    );
};
