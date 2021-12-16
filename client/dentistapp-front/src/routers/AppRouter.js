import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PublicDashboard } from "./PublicDashboard";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    return (
        
        <BrowserRouter>
        
        <Routes>

            <Route path="/*" element={
            
                <PublicRoute>
                    <PublicDashboard/>
                </PublicRoute>
                
            } />
            

        </Routes>
        
        </BrowserRouter>
    )
}
