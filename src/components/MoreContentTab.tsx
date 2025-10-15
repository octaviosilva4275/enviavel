import { BookOpen, Shield, CheckCircle, ExternalLink } from 'lucide-react';

const content = [
  {
    id: 1,
    icon: BookOpen,
    title: 'E-book: 50 Exemplos Reais de Conversas',
    description: 'Conversas reais que geraram encontros e relacionamentos.',
    buttonText: 'Acessar Agora',
    gradient: 'from-red-900 to-red-950'
  },
  {
    id: 2,
    icon: Shield,
    title: 'Guia: Como Lidar com Testes Femininos',
    description: 'Responda aos testes de forma que ela te respeite mais.',
    buttonText: 'Acessar Agora',
    gradient: 'from-zinc-800 to-zinc-900'
  },
  {
    id: 3,
    icon: CheckCircle,
    title: 'Checklist: Sinais de Que Ela Está Interessada',
    description: 'Nunca mais perca o timing certo para avançar.',
    buttonText: 'Acessar Agora',
    gradient: 'from-red-950 to-black'
  }
];

export default function MoreContentTab() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/30 border border-red-900/30">
          <span className="text-sm font-semibold text-red-500 tracking-wider uppercase">
            Bônus Exclusivos
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Conteúdos Exclusivos</h2>
        <p className="text-zinc-500 text-xl max-w-2xl mx-auto">
          Acelere seus resultados com material complementar de alto valor
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.map((item, index) => (
          <div
            key={item.id}
            className="group animate-fade-in"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${item.gradient} p-8 flex flex-col justify-between min-h-[400px] border border-zinc-800/50 hover:border-red-900/50 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-red-900/10 transform hover:scale-105`}
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-5" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/10 rounded-full blur-3xl group-hover:bg-red-600/20 transition-colors" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

              <div className="relative space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                  <item.icon className="w-9 h-9 text-white" strokeWidth={2} />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-zinc-300 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <button className="relative mt-8 w-full py-4 px-6 bg-white text-black font-bold rounded-xl hover:bg-zinc-100 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-4 shadow-2xl hover:shadow-white/20 group-hover:scale-105">
                {item.buttonText}
                <ExternalLink className="w-5 h-5" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
