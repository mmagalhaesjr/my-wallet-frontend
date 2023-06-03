import TelaCadastro from "./pages/TelaCadastro/TelaCadastro"
import TelaLogin from "./pages/TelaLogin/TelaLogin"
import TelaHome from "./pages/TelaHome/TelaHome"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import TelaNovaEntrada from "./pages/TelasNovaEntradaSaida/TelaNovaEntrada"
import TelaNovaSaida from "./pages/TelasNovaEntradaSaida/TelaNovaSaida"
import { useState } from "react"
import TokenContext from "./contexts/TokenContext"

export default function App() {
    const [token, setToken] = useState('')
    const [user, setUser] = useState('')

    return (
        <TokenContext.Provider value={{ token, setToken, user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaLogin />} />
                    <Route path="/cadastro" element={<TelaCadastro />} />
                    <Route path="/home" element={<TelaHome />} />
                    <Route path="/nova-entrada" element={<TelaNovaEntrada />} />
                    <Route path="/nova-saida" element={<TelaNovaSaida />} />
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    )

}
