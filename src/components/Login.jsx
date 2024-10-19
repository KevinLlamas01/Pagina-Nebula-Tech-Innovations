import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  
    if (username === "admin" && password === "admin") {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      navigate("/admin");
    } else {
      alert("Credenciales incorrectas");
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-4">
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 max-w-md w-full shadow-2xl border border-white border-opacity-20">
      <h2 className="text-3xl font-extrabold text-center text-white mb-8 tracking-wider">Login | Nebula</h2>
      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-opacity-30 transition duration-300"
            placeholder="Ingresa tu usuario"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-opacity-30 transition duration-300"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Ingresar
        </button>
      </form>
    </div>
  </div>
  );
};
