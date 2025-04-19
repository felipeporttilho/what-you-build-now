// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound"; // Se não tiver, crie uma tela 404 simples.

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

