// src/components/LoginPage.jsx
import { useState } from "react";

export default function LoginPage({ onLogin }) {
  const VALID_EMAIL = "1322@mensagensmagneticas.com";
  const VALID_PASSWORD = "c1322";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setMessage("Preencha os campos corretamente.");
      return;
    }

    if (email.toLowerCase() === VALID_EMAIL && password === VALID_PASSWORD) {
      setMessage("Acesso liberado 🔓");
      onLogin(); // <-- avisa o App que o login foi realizado
    } else {
      setMessage("E-mail ou senha incorretos.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-950 to-black px-4">
      <div className="max-w-md w-full bg-zinc-900/40 backdrop-blur-md rounded-2xl p-8 text-center animate-fadeIn">
        <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400 mb-2">
          Acesso Restrito
        </h1>
        <p className="text-zinc-400 mb-6">Área de acesso — insira suas credenciais</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label className="text-xs text-zinc-400" htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="text-left">
            <label className="text-xs text-zinc-400" htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-xl font-bold text-white hover:scale-105 transition-transform"
          >
            Entrar
          </button>

          {message && (
            <div className={`mt-2 text-sm font-semibold transition-all text-red-400`}>
              {message}
            </div>
          )}
        </form>

        <p className="mt-6 text-xs text-zinc-500">
          © Mensagens Magnéticas 2025
        </p>
      </div>
    </div>
  );
}
