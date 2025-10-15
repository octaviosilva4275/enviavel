import { motion } from "framer-motion";
import { CheckCircle, Lock, Shield, Flame } from "lucide-react";

export default function UpsellPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative py-20 px-6 text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent"
        >
          ⚠️ Última Chance de Desbloquear o Método PRO
        </motion.h1>

        <p className="text-gray-400 text-lg md:text-xl mb-8">
          90% dos alunos que ativam o modo PRO recebem respostas 3x mais rápidas
          e marcam encontros em até 48h.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="px-10 py-5 bg-gradient-to-r from-red-700 to-red-500 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(255,0,0,0.5)] hover:shadow-[0_0_40px_rgba(255,0,0,0.8)] transition-all"
        >
          🔥 QUERO DESBLOQUEAR AGORA
        </motion.button>

        <p className="mt-4 text-sm text-gray-500">Oferta válida por tempo limitado.</p>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-16 bg-zinc-900/40 border-y border-zinc-800 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Resultados Reais de Alunos PRO 💬
        </h2>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-4 w-80 shadow-lg border border-zinc-700"
              >
                <div className="text-left space-y-2">
                  <p className="text-gray-400 text-sm">Antes:</p>
                  <p className="bg-zinc-950/70 p-3 rounded-lg text-gray-500 text-sm">
                    “Tu sumiu 😔”
                  </p>
                  <p className="text-gray-400 text-sm mt-3">Depois:</p>
                  <p className="bg-red-900/30 p-3 rounded-lg text-red-300 text-sm">
                    “Saí ontem, mas nada se compara a ti 😌”
                  </p>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20 text-center px-4">
        <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent">
          O Que Você Vai Desbloquear
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Mensagens de Desejo Instantâneo",
              desc: "Frases que ativam o instinto feminino em segundos.",
            },
            {
              title: "Técnica do Gatilho Emocional",
              desc: "Como criar conexão profunda só com texto.",
            },
            {
              title: "Segredos do Silêncio Estratégico",
              desc: "Quando sumir e o que dizer quando ela reaparece.",
            },
          ].map((b, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-8 shadow-xl border border-zinc-700"
            >
              <h3 className="text-2xl font-bold mb-4 text-red-400">
                {b.title}
              </h3>
              <p className="text-gray-400">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OFERTA */}
      <section className="py-16 bg-black border-y border-zinc-800 text-center">
        <h2 className="text-4xl font-bold mb-6 text-red-500">
          ⚠️ Oferta Exclusiva
        </h2>
        <p className="text-gray-400 text-lg mb-6">
          Só disponível nesta página.
        </p>

        <div className="text-2xl text-gray-500 line-through mb-2">R$ 297,00</div>
        <div className="text-6xl font-extrabold text-white mb-4">R$ 47,00</div>
        <p className="text-gray-400 mb-8">Ou 6x de R$ 8,97</p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-5 bg-gradient-to-r from-red-700 to-red-500 rounded-xl font-bold text-lg shadow-[0_0_25px_rgba(255,0,0,0.6)] hover:shadow-[0_0_40px_rgba(255,0,0,0.8)] transition-all"
        >
          🔥 QUERO SER ALUNO PRO
        </motion.button>
      </section>

      {/* GARANTIA */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300">
          <div className="flex flex-col items-center">
            <Shield className="w-10 h-10 text-red-500 mb-2" />
            <p>Garantia de 7 Dias</p>
          </div>
          <div className="flex flex-col items-center">
            <Lock className="w-10 h-10 text-red-500 mb-2" />
            <p>Pagamento 100% Seguro</p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle className="w-10 h-10 text-red-500 mb-2" />
            <p>Acesso Imediato</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-zinc-800">
        <p>© 2025 Mensagens Magnéticas — Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
