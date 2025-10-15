
// src/components/UpsellPage.tsx
import React from "react";
import { CheckCircle, Lock, Shield, Flame } from "lucide-react";

function ChatBubble({
  text,
  from,
  isUser,
  time,
}: {
  text: string;
  from?: string;
  isUser?: boolean;
  time?: string;
}) {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div className={`max-w-[78%]`}>
        {!isUser && (
          <div className="text-xs text-zinc-400 mb-1">{from ?? "Contato"}</div>
        )}
        <div
          className={`px-4 py-3 rounded-2xl break-words text-sm leading-6 ${
            isUser
              ? "bg-gradient-to-br from-red-600 to-red-500 text-white rounded-br-none"
              : "bg-zinc-800 text-zinc-100 rounded-bl-none border border-zinc-700"
          }`}
        >
          {text}
        </div>
        <div className="text-[11px] text-zinc-500 mt-1 text-right">{time}</div>
      </div>
    </div>
  );
}

export default function UpsellPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white overflow-hidden">
      {/* Accent blobs */}
      <div className="absolute -top-16 -right-8 w-72 h-72 bg-red-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-8 w-96 h-96 bg-red-950/5 rounded-full blur-3xl pointer-events-none" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="bg-red-700/20 text-red-300 px-3 py-1 rounded-full text-xs font-semibold">
                OFERTA RELÂMPAGO
              </span>
              <span className="text-zinc-500 text-sm">Vagas limitadas</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              ⚠️ Última Chance — Desbloqueie o Método <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-300">PRO</span>
            </h1>

            <p className="text-zinc-400 mb-6 text-lg">
              90% dos alunos que ativam o modo PRO recebem respostas 3x mais rápidas
              e marcam encontros em até 48h. Sem enrolação — scripts testados e prontos.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <a
                href="/oferta"
                className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-red-700 to-red-500 rounded-2xl font-bold shadow-[0_8px_40px_rgba(255,0,0,0.25)] hover:scale-[1.02] transition-transform"
                aria-label="Quero desbloquear agora"
              >
                🔥 QUERO DESBLOQUEAR AGORA
              </a>

              <div className="text-sm text-zinc-400">
                <div className="text-lg font-extrabold">R$ 47</div>
                <div className="text-zinc-500 line-through">R$ 297</div>
                <div className="text-zinc-500">ou 6x de R$ 8,97</div>
              </div>
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-500" />
                Scripts prontos (copy-paste)
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-red-500" />
                Acesso imediato
              </li>
              <li className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-red-500" />
                Pagamento 100% seguro
              </li>
              <li className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-red-500" />
                Resultado acelerado
              </li>
            </ul>
          </div>

          {/* PHONE MOCK + Conversation simulation */}
          <div className="flex justify-center md:justify-end">
            <div className="w-[320px] md:w-[380px] bg-zinc-900 border border-zinc-800 rounded-3xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="px-4 py-3 bg-gradient-to-b from-zinc-900/60 to-zinc-900/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-red-600 to-red-400 flex items-center justify-center font-bold">MM</div>
                  <div>
                    <div className="text-sm font-semibold">Mensagens Magnéticas</div>
                    <div className="text-[11px] text-zinc-500">Última mensagem: 2h</div>
                  </div>
                </div>
                <div className="text-xs text-zinc-400 font-semibold">PRO</div>
              </div>

              {/* Chat area */}
              <div className="p-4 h-[420px] overflow-y-auto bg-gradient-to-b from-zinc-900 to-zinc-950">
                {/* Simulated conversation */}
                <ChatBubble
                  from="Ela"
                  text="Tu sumiu 😔"
                  time="20:12"
                  isUser={false}
                />
                <ChatBubble
                  text="Desculpa, fiquei off. Mas acho que mereço uma resposta melhor que isso 😏"
                  time="20:13"
                  isUser={true}
                />
                <ChatBubble
                  from="Ela"
                  text="Sério? Me manda uma foto sua."
                  time="20:14"
                  isUser={false}
                />

                {/* AFTER - using PRO script */}
                <div className="my-4 text-[11px] text-zinc-500 text-center">— Depois de usar o Método PRO —</div>

                <ChatBubble
                  from="Ela"
                  text="Que surpresa boa 😍. Saí ontem mas nada se compara a ti."
                  time="21:05"
                  isUser={false}
                />
                <ChatBubble
                  text="Tava pensando em te convidar pra um lugar tranquilo esse fim de semana. Que tal sábado às 20h?"
                  time="21:06"
                  isUser={true}
                />
                <ChatBubble
                  from="Ela"
                  text="Perfeito. Me passa o endereço 😊"
                  time="21:07"
                  isUser={false}
                />

                {/* micro testimonial */}
                <div className="mt-4 p-3 bg-zinc-800 rounded-lg text-sm text-zinc-200 border border-zinc-700">
                  <div className="font-semibold">Aluno: João —</div>
                  <div className="text-zinc-400 text-sm">“Em 48h já tinha marcado encontro. As mensagens funcionam.”</div>
                </div>
              </div>

              {/* Footer of phone mock */}
              <div className="px-4 py-3 bg-zinc-900/60 flex items-center gap-3">
                <input
                  className="flex-1 bg-zinc-800/40 placeholder-zinc-500 px-3 py-2 rounded-xl text-sm outline-none"
                  placeholder="Escreva uma mensagem..."
                  readOnly
                />
                <button className="px-3 py-2 bg-red-600 rounded-xl text-white text-sm font-semibold">Enviar</button>
              </div>
            </div>
          </div>
        </section>

        {/* PROVA SOCIAL (cards) */}
        <section className="mt-14">
          <h2 className="text-3xl font-bold mb-6">Resultados Reais de Alunos PRO 💬</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="font-semibold">João, 28</div>
                  <div className="text-xs text-zinc-500">São Paulo</div>
                </div>
                <div className="text-sm text-green-400 font-bold">+1 encontro</div>
              </div>
              <p className="text-zinc-400 mb-4">“Usei o módulo de abertura. Em 24h já recebi resposta e combinamos um encontro.”</p>
              <div className="text-xs text-zinc-500">Exemplo de mensagem enviada:</div>
              <div className="mt-2 p-3 bg-zinc-800 rounded-lg text-sm text-zinc-100">“Tô a pensar em algo diferente pra sábado — topa?”</div>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="font-semibold">Rafael, 31</div>
                  <div className="text-xs text-zinc-500">Curitiba</div>
                </div>
                <div className="text-sm text-green-400 font-bold">+3 conversas engajadas</div>
              </div>
              <p className="text-zinc-400 mb-4">“Os gatilhos emocionais são absurdos — transformaram conversas mornas em oportunidades reais.”</p>
              <div className="text-xs text-zinc-500">Antes / Depois:</div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div className="bg-zinc-800 p-2 rounded text-xs text-zinc-300">Antes: “Oi”</div>
                <div className="bg-red-900/20 p-2 rounded text-xs text-red-300">Depois: “Achei que gostasse de surpresas — sábado te mostro.”</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="font-semibold">Mateus, 25</div>
                  <div className="text-xs text-zinc-500">Belo Horizonte</div>
                </div>
                <div className="text-sm text-green-400 font-bold">Pagamento x Resultado</div>
              </div>
              <p className="text-zinc-400 mb-4">“Paguei R$47 e tive retorno real — vale cada centavo.”</p>
              <div className="text-xs text-zinc-500">Mensagem vencedora (resumida):</div>
              <div className="mt-2 p-2 bg-zinc-800 rounded text-sm text-zinc-100">“Quero te ver de um jeito que ninguém mais vê.”</div>
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS / GARANTIA */}
        <section className="mt-12 grid md:grid-cols-2 gap-6 items-center bg-gradient-to-b from-zinc-900/40 to-transparent p-6 rounded-2xl border border-zinc-800">
          <div>
            <h3 className="text-2xl font-bold mb-3">O que você leva agora</h3>
            <ul className="text-zinc-400 space-y-2">
              <li>• Pacote de scripts prontos (módulos por situação)</li>
              <li>• Framework do silêncio estratégico</li>
              <li>• Modelos para reativação e convite</li>
              <li>• Atualizações e suporte</li>
            </ul>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex items-center gap-4">
              <Shield className="w-8 h-8 text-red-500" />
              <div>
                <div className="font-semibold">Garantia de 7 dias</div>
                <div className="text-xs text-zinc-400">Teste, aplique e peça reembolso se não gostar.</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Lock className="w-8 h-8 text-red-500" />
              <div>
                <div className="font-semibold">Pagamento Seguro</div>
                <div className="text-xs text-zinc-400">Checkout com criptografia</div>
              </div>
            </div>

            <a
              href="/oferta"
              className="mt-2 inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-700 to-red-500 rounded-xl font-bold shadow-md hover:scale-[1.02] transition-transform"
            >
              🔥 Quero acessar o PRO — R$47
            </a>
          </div>
        </section>

        <footer className="mt-12 text-center text-zinc-500 text-sm">
          © 2025 Mensagens Magnéticas — Todos os direitos reservados.
        </footer>
      </main>
    </div>
  );
}
