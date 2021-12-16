import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "../components/Login";
import { DentistApp } from "../DentistApp";

export const AppRouter = () => {
    return (
        
        <BrowserRouter>
        
        <Routes>

            <Route path="/" element={<DentistApp />} />
            <Route path="/login" element={<Login />} />

        </Routes>
        
        </BrowserRouter>
    )
}
