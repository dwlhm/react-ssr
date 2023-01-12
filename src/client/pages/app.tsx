import React from "react"
import {
    Routes,
    Route,
    Link
} from "react-router-dom"

export const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<div>HOME<br/><Link to="/hi">Go to HI! page</Link></div>} />
            <Route path="/hi" element={<div>HI!<br/><Link to="/">Go to Home page</Link></div>} />
        </Routes>
    )
}
