import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

// COMPONENTES
import { Header } from "./components/Header.jsx";
import { Sec1_Inicio } from "./components/Sec1_Inicio.jsx";
import { Sec2_Nosotros } from "./components/Sec2_Nosotros.jsx";
import { Sec3_Servicios } from "./components/Sec3_Servicios.jsx";
import { Sec4_Diseño } from "./components/Sec4_Diseño.jsx";
import { Sec5_Clientes } from "./components/Sec5_Clientes.jsx";
import { Sec6_Reportes } from "./components/Sec6_Reportes.jsx";
import { Sec7_Sistemas } from "./components/Sec7_Sistemas.jsx";
import { Footer } from "./components/Footer.jsx";

// ESTILOS
import "./css/normalize.css";
import "./css/styles.css";

const App = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 5000); // 5000 ms = 5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showHeader && <Header />}
      <main className="bg-gray-50">
        <Sec1_Inicio />
        <Sec2_Nosotros />
        <Sec3_Servicios />
        <Sec4_Diseño />
        <Sec5_Clientes />
        <Sec6_Reportes />
        <Sec7_Sistemas />
      </main>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
