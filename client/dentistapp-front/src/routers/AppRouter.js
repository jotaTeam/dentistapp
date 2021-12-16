import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PublicDashboard } from "./PublicDashboard";
import { PublicRoute } from "./PublicRoute";
import { AdminRoute } from "./AdminRoute";
import { AdminDashboard } from "./AdminDashboard";
import { PacienteRoute } from "./PacienteRoute";
import { PacienteDashboard } from "./PacienteDashboard";

export const AppRouter = () => {
    return (
        
        <BrowserRouter>
        
        <Routes>

            <Route path="/*" element={
            
                <PublicRoute>
                    <PublicDashboard/>
                </PublicRoute>
                
            } />
            
            <Route path="/admin/*" element={
            
                <AdminRoute>
                    <AdminDashboard/>
                </AdminRoute>
                
            } />

            <Route path="/paciente/*" element={
            
                <PacienteRoute>
                    <PacienteDashboard/>
                </PacienteRoute>
                
            } />

        </Routes>
        
        </BrowserRouter>
    )
}
