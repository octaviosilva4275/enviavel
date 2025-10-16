// src/components/LoginPage.jsx
import { useState } from "react";

export default function LoginPage() {
  const VALID_EMAIL = "1322@mensagensmagneticas.com";
  const VALID_PASSWORD = "c1322";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setMessage("Preencha os campos corretamente.");
      setSuccess(false);
      return;
    }

    if (email.toLowerCase() === VALID_EMAIL && password === VALID_PASSWORD) {
      setMessage("Acesso liberado 🔓");
      setSuccess(true);
    } else {
      setMessage("E-mail ou senha incorretos.");
      setSuccess(false);
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
            <div
              className={`mt-2 text-sm font-semibold transition-all ${
                success ? "text-green-400" : "text-red-400"
              }`}
            >
              {message}
            </div>
          )}
        </form>

        {success && (
          <div className="mt-6 text-left text-zinc-200">
            <h2 className="font-bold text-lg mb-2">Área do Produto</h2>
            <p className="text-zinc-400 mb-2">
              Bem-vindo ao Módulo PRO. Conteúdos liberados para sua conta demo:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-300">
              <li>Módulo 1 — Abertura Magnética</li>
              <li>Módulo 2 — Gatilhos Emocionais</li>
              <li>Módulo 3 — Silêncio Estratégico</li>
              <li>Checklist diário de aplicação</li>
            </ul>
          </div>
        )}

        <p className="mt-6 text-xs text-zinc-500">
          © Mensagens Magnéticas 2025
        </p>
      </div>
    </div>
  );
}
