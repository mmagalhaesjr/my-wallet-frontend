import TelaCadastro from "./pages/TelaCadastro/TelaCadastro"
import TelaLogin from "./pages/TelaLogin/TelaLogin"
import TelaHome from "./pages/TelaHome/TelaHome"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import TelaNovaEntrada from "./pages/TelasNovaEntradaSaida/TelaNovaEntrada"
import TelaNovaSaida from "./pages/TelasNovaEntradaSaida/TelaNovaSaida"

export default function App() {

    return (
        <div className="App">
            {/* <TelaCadastro /> */}
            {/* <TelaLogin/> */}
            <TelaHome/>
            {/* <TelaNovaEntrada/> */}
            {/* <TelaNovaSaida/> */}
        </div>
    )

}