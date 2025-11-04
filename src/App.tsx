<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1bbdcdb8ae87d19871d9f2f76c5583d5385b5c25
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Reports from "./pages/Reports/Reports";
import AuditPage from "./components/Página-Geral/AuditPage";
import SettingsPage from "./components/Configurações/SettingsPage";
import "./style/estilo.css";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/relatorios" element={<Reports />} />
      <Route path="/auditoria" element={<AuditPage />} />
      <Route path="/configuracoes" element={<SettingsPage />} />
    </Routes>
  );
};

export default App;
<<<<<<< HEAD
=======
>>>>>>> 5bc3cfb00f13230d406d1c57ebba92ecbf6c3d1d
=======
>>>>>>> 1bbdcdb8ae87d19871d9f2f76c5583d5385b5c25
