import { useEffect, useState } from "react";
import './App.css';
import GlitchText from './components/GlitchText';
import Noise from './components/Noise';
import TextType from './components/TextType';
import { motion } from "framer-motion"
import Contact from "./components/Contact";

export default function App() {
  const [lang, setLang] = useState('pt');
  const portugueseMode = document.getElementById("lang-toggle")?.checked;
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("nav a");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;

            links.forEach(link => {
              link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${id}`
              );
            });
          }
        });
      },
      { threshold: 0.8 }
    );

    sections.forEach(section => observer.observe(section));
  }, []);


  useEffect(() => {
    console.log(lang)
  }, [lang])

  return (
    <>
      <input className="hidden peer" id="lang-toggle" type="checkbox" />
      <div className="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          delay={5}
        >
          <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3 w-full">
              <div className="size-8 bg-primary rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-black font-bold text-lg">code</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-white">MURILO.DEV</h2>

              <label
                className="flex lg:hidden relative flex ml-auto items-center cursor-pointer group select-none h-9 w-24 bg-white/5 border border-white/10 rounded-full p-1 overflow-hidden"
                htmlFor="lang-toggle">
                <div
                  className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-primary rounded-full transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_0_15px_rgba(37,244,106,0.5)] flex items-center justify-center"
                  id="pill-highlight">
                  <div className="motion-trail absolute inset-0 bg-primary/40 rounded-full blur-sm transition-all duration-300">
                  </div>
                </div>

                <input
                  className="hidden peer"
                  id="lang-toggle"
                  type="checkbox"
                />
                <div
                  className="relative z-10 w-full flex justify-around items-center h-full text-[11px] font-black tracking-widest">
                  <span className="text-white transition-colors duration-300" id="label-pt-pill">PT</span>
                  <span className="text-white transition-colors duration-300" id="label-en-pill">EN</span>
                </div>
              </label>
            </div>
            <nav className="hidden lg:flex items-center gap-8">
              <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#hero">
                <span className="lang-pt">Início</span>
                <span className="lang-en">Home</span>
              </a>
              <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#experience">
                <span className="lang-pt">Experiência</span>
                <span className="lang-en">Experience</span>
              </a>
              <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#projects">
                <span className="lang-pt">Projetos</span>
                <span className="lang-en">Projects</span>
              </a>
              <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#education">
                <span className="lang-pt">Educação</span>
                <span className="lang-en">Education</span>
              </a>
              <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#skills">Skills</a>

              <label
                className="relative flex items-center cursor-pointer group select-none h-9 w-24 bg-white/5 border border-white/10 rounded-full p-1 overflow-hidden"
                htmlFor="lang-toggle">
                <div
                  className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-primary rounded-full transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_0_15px_rgba(37,244,106,0.5)] flex items-center justify-center"
                  id="pill-highlight">
                  <div className="motion-trail absolute inset-0 bg-primary/40 rounded-full blur-sm transition-all duration-300">
                  </div>
                </div>

                <input
                  className="hidden peer"
                  id="lang-toggle"
                  type="checkbox"
                />
                <div
                  className="relative z-10 w-full flex justify-around items-center h-full text-[11px] font-black tracking-widest">
                  <span className="text-white transition-colors duration-300" id="label-pt-pill">PT</span>
                  <span className="text-white transition-colors duration-300" id="label-en-pill">EN</span>
                </div>
              </label>
              <a className="flex items-center !text-black justify-center px-5 py-2 rounded-lg bg-primary text-black text-sm font-bold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(37,244,106,0.2)]"
                href="#contact">
                <span className="lang-pt">Contato</span>
                <span className="lang-en">Contact</span>
              </a>
            </nav>
          </div>
        </motion.div>
      </div>

      <main className="pt-20">
        <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-20 -mt-10 md:mt-0" id="hero">
          <div className="max-w-[1200px] w-full grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="lang-pt">Disponível para novos projetos</span>
                <span className="lang-en">Available for new projects</span>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <TextType
                    text="Murilo Neves"
                    typingSpeed={150}
                    pauseDuration={1500}
                    showCursor
                    className="text-[2.7rem] md:text-7xl font-black leading-[1.1] tracking-tight text-white"
                    cursorCharacter="|"
                    deletingSpeed={30}
                    variableSpeedEnabled={false}
                    variableSpeedMin={60}
                    variableSpeedMax={120}
                    cursorBlinkDuration={0.5}
                  />
                </motion.div>


                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <GlitchText
                    speed={0.3}
                    enableShadows={false}
                    enableOnHover={false}
                    className='custom-class text-[2.7rem]! md:text-7xl! font-black leading-[1.1] tracking-tight text-primary!'
                    style={{ color: "rgb(37, 244, 106) !important" }}
                  >
                    Bonow
                  </GlitchText>
                </motion.div>
              </div>

              <p className="text-[1rem] md:text-[1.5rem] text-slate-400 max-w-lg leading-relaxed">
                <span className="lang-pt">Desenvolvedor Full-Stack especializado em aplicações web escaláveis, APIs bem estruturadas e interfaces performáticas.</span>
                <span className="lang-en">Full-Stack Developer specialized in scalable web applications, well-structured APIs, and high-performance interfaces.</span>
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a className="px-8 py-4 rounded-lg bg-primary text-black font-bold text-lg hover:shadow-[0_0_30px_rgba(37,244,106,0.4)] transition-all"
                  href="#projects">
                  <span className="lang-pt">Ver Portfólio</span>
                  <span className="lang-en">View Portfolio</span>
                </a>
                <a className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all"
                  href="#contact">
                  <span className="lang-pt">Entre em contato</span>
                  <span className="lang-en">Get in touch</span>
                </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="hidden lg:flex w-full aspect-square rounded-2xl border items-center justify-center overflow-hidden relative"
                style={{
                  backgroundImage: `
      linear-gradient(135deg, rgba(37,244,106,0.2), transparent),
      radial-gradient(rgba(37,244,106,0.5) 0.5px, transparent 0.5px)
    `,
                  backgroundSize: "100% 100%, 24px 24px",
                  backgroundPosition: "0 0, 0 0",
                  borderColor: "rgba(37,244,106,0.2)",
                }}
              >
                <span
                  className="material-symbols-outlined text-[160px]"
                  style={{ color: "rgba(37,244,106,0.4)" }}
                >
                  terminal
                </span>
                <Noise
                  patternSize={250}
                  patternScaleX={2}
                  patternScaleY={2}
                  patternRefreshInterval={2}
                  patternAlpha={15}
                />
              </div>
            </motion.div>

          </div>
        </section>

        <section className="py-24 px-6 bg-white/2" id="experience">
          <div className="max-w-240 mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <span className="material-symbols-outlined text-primary text-3xl">work_history</span>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-[1.3rem] md:text-3xl font-bold text-white tracking-tight">
                  <span className="lang-pt">Experiência Profissional</span>
                  <span className="lang-en">Professional Experience</span>
                </h2>
                
              </motion.div>
            </div>
            <p className="text-primary/80 text-[1.2rem] mb-8">Cantinho das Pizzas e do Açaí • 2025 - atual</p>
            
            <div className="grid grid-cols-[40px_1fr] gap-x-6">
              
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center justify-center size-10 rounded-full border border-primary/40 bg-primary/5">
                  <span className="material-symbols-outlined text-primary text-xl">rocket</span>
                </div>
                <div className="w-0.5 bg-primary/10 h-full grow my-1"></div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
              >
                <div className="flex flex-col pb-7">
                  <h3 className="lang-pt text-xl font-bold text-white">Desenvolvedor Full-Stack Pleno</h3>
                  <h3 className="lang-en text-xl font-bold text-white">Full-Stack Developer</h3>
                  {/* <p className="text-primary/80 font-medium -mb-8">Cantinho das Pizzas e do Açaí • 2026 - atual</p> */}
                </div>
              </motion.div>

              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center justify-center size-10 rounded-full border border-primary/40 bg-primary/5">
                  <span className="material-symbols-outlined text-primary/80 text-xl">code</span>
                </div>
                <div className="w-0.5 bg-primary/10 h-full grow my-1"></div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex flex-col pb-17">
                  <h3 className="lang-pt text-xl font-bold text-white">Desenvolvedor Full-Stack Júnior</h3>
                  <h3 className="lang-en text-xl font-bold text-white">Junior Full-Stack Developer</h3>
                  {/* <p className="text-primary/80 font-medium mb-2">Cantinho das Pizzas e do Açaí • 2025 - 2026</p> */}
                  <p className="text-slate-400 leading-relaxed mt-3">
                    <span className="lang-pt">Desenvolvimento em andamento de um sistema ERP completo para automação operacional, com projeção de redução superior a R$ 3.000/mês em custos operacionais e ganho significativo de eficiência nos processos internos.
                      Implementação de chatbot para WhatsApp integrado à API da OpenAI, com back-end unificado em Node.js, responsável pelo processamento automatizado de pedidos e comunicação em tempo real.
                      Desenvolvimento de painel web em React (JavaScript), Node.js e MySQL, centralizando toda a operação do delivery, incluindo:
                      <ul className="flex gap-3 flex-col">
                        <li>• Gestão completa de pedidos (histórico, filtros, edição, impressão e exclusão)</li>
                        <li>• Dashboard financeiro com métricas estratégicas (ex: ticket médio, produto mais vendido, formas de pagamento)</li>
                        <li>• Gerenciamento dinâmico de produtos com integração direta ao banco de dados</li>
                        <li>• Rastreamento em tempo real de entregadores com atribuição de pedidos</li>
                        <li>• Aplicativo móvel para entregadores com sincronização de rotas e atualização de status</li>
                      </ul>
                    </span>

                    <span className="lang-en">Developed custom e-commerce engines and CMS platforms. Implemented automated CI/CD
                      pipelines and managed complex PostgreSQL databases.</span>
                  </p>
                </div>
              </motion.div>



              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center justify-center size-10 rounded-full border border-primary/20 bg-primary/5">
                  <span className="material-symbols-outlined text-primary/40 text-xl">database</span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-white">Business Intelligence Analyst</h3>
                  <p className="text-primary/60 font-medium mb-2">ESP Inteligência de Negócios • 2025 - 2025</p>
                  <p className="text-slate-400 leading-relaxed">
                    <ul className="lang-pt flex flex-col gap-3">
                      <li>• Desenvolvimento de indicadores, relatórios e dashboards em BI (Power BI)</li>
                      <li>• Levantamento de requisitos e proposição de soluções alinhadas às melhores práticas de mercado</li>
                      <li>• Integração e sincronização de dados entre sistemas e bancos de dados</li>
                      <li>• Criação e gestão de usuários e permissões no Power BI</li>
                      <li>• Automação de rotinas e processos de dados</li>
                      <li>• Suporte ao cliente e apoio técnico</li>
                      <li>• Documentação técnica e participação em reuniões estratégicas internas</li>
                    </ul>

                    <ul className="lang-en">
                      <li>• Development of indicators, reports and dashboards in BI (Power BI)</li>
                      <li>• Requirements gathering and proposal of solutions aligned with best market practices</li>
                      <li>• Data integration and synchronization between systems and databases</li>
                      <li>• Creation and management of users and permissions in Power BI</li>
                      <li>• Automation of data routines and processes</li>
                      <li>• Client support and technical assistance</li>
                      <li>• Technical documentation and participation in internal strategic meetings</li>
                    </ul>

                    <span className="lang-en">Built responsive front-end components using React and styled-components. Maintained
                      internal dashboards and API documentation.</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6" id="projects">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <span className="material-symbols-outlined text-primary text-3xl">grid_view</span>
                  <h2 className="text-3xl font-bold text-white tracking-tight">
                    <span className="lang-pt">Projetos em Destaque</span>
                    <span className="lang-en">Featured Projects</span>
                  </h2>
                </div>
                <p className="text-slate-400">
                  <span className="lang-pt">Uma seleção dos meus desenvolvimentos full-stack mais impactantes.</span>
                  <span className="lang-en">A selection of my most impactful full-stack developments.</span>
                </p>
              </div>
              {/* <a className="text-primary text-sm font-bold border-b border-primary/30 hover:border-primary pb-1 transition-all"
                href="#">
                <span className="lang-pt">Ver todos os projetos</span>
                <span className="lang-en">View all projects</span>
              </a> */}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <div
                  className="group bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-primary/40 transition-all">
                  <div className="h-48 bg-slate-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtCfVPfI5EzIy106PJJPajwQ-1baaWtEiefPyk1sC_wdW_y2C_M88ELqhpdChUwmvU6vTMuAStfua2GkAYbzHYo0uhd6GB7kqgNQJptMw8Cah4p9mx2Su0qhp7bSwi--KaVJDMZJo-mSgTc1tlen2QP1sQhqp0f9nxp0aAHm_XzhUDPMTn0gAPTwR9u1t8YOVFoaaTqctFOc47lb3Gu7x7fjdDBBHMRpc49KNNqxzKuLeCTAqNRIA7tnHiNohdXoEAUNO58og_HvE')" }}>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                  >

                    <div className="p-6">
                      <div className="flex gap-2 mb-3">
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">NEXT.JS</span>
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">POSTGRES</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Nexus Analytics Platform</h3>
                      <p className="text-slate-400 text-sm mb-4">
                        <span className="lang-pt">Dashboard de visualização de dados em tempo real com suporte multi-tenant e
                          insights preditivos.</span>
                        <span className="lang-en">Real-time data visualization dashboard with multi-tenant support and predictive
                          insights.</span>
                      </p>
                      <a className="inline-flex items-center gap-2 text-primary text-sm font-bold group-hover:gap-3 transition-all"
                        href="#">
                        <span className="lang-pt">Estudo de Caso</span><span className="lang-en">Case Study</span> <span
                          className="material-symbols-outlined text-sm">arrow_forward</span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white/[0.02]" id="education">
          <div className="max-w-[960px] mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <span className="material-symbols-outlined text-primary text-3xl">school</span>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                <span className="lang-pt">Educação</span>
                <span className="lang-en">Education</span>
              </h2>
            </div>
            <div className="grid gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0 }}
              >
                <div
                  className="p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all group">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 bg-primary/10 rounded-full">2026 - 2030</span>
                    <span
                      className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">school</span>
                  </div>
                  <h3 className="lang-pt text-xl font-bold text-white">Bacharelado em Ciência da Computação</h3>
                  <h3 className="lang-en text-xl font-bold text-white">Bachelor's Degree in Computer Science</h3>
                  <p className="text-slate-400 mt-2">Estácio</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <div
                  className="p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all group">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 bg-primary/10 rounded-full">2023 - 2025</span>
                    <span
                      className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">school</span>
                  </div>
                  <h3 className="lang-pt text-xl font-bold text-white">Graduação em Análise e Desenvolvimento de Sistemas</h3>
                  <h3 className="lang-en text-xl font-bold text-white">Bachelor's Degree in Systems Analysis and Development</h3>
                  <p className="text-slate-400 mt-2">Senac</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div
                  className="p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all group">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 bg-primary/10 rounded-full">2020 - 2022</span>
                    <span
                      className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">school</span>
                  </div>
                  <h3 className="lang-pt text-xl font-bold text-white">Curso Técnico em Programação de Jogos Digitais</h3>
                  <h3 className="lang-en text-xl font-bold text-white">Technical Course in Digital Game Programming</h3>
                  <p className="text-slate-400 mt-2">Senac</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6" id="skills">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center! mb-16 ">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                {/* <GlitchText
                  speed={0.3}
                  enableShadows={false}
                  enableOnHover={false}
                  className='custom-class text-6xl! md:text-7xl! font-black leading-[1.1] tracking-tight text-primary! w-[600px]'
                  style={{ color: "rgb(37, 244, 106) !important" }}
                > */}
                <p className="lang-pt text-6xl">Arsenal Técnico</p>
                <p className="lang-en text-6xl">Technical Arsenal</p>
                {/* </GlitchText> */}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="lang-pt text-slate-400 max-w-2xl mx-auto mt-10">
                  Focado em tecnologias web modernas e construção de arquiteturas escaláveis e sustentáveis.
                </p>
                <p className="lang-en text-slate-400 max-w-2xl mx-auto mt-10">
                  Focused on modern web technologies and building scalable, maintainable architectures.
                </p>
              </motion.div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="skill-circle size-20 rounded-full flex items-center justify-center bg-background-dark">
                    <span className="material-symbols-outlined text-primary text-3xl">javascript</span>
                  </div>
                  <span className="text-sm font-medium text-slate-300">JavaScript</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="skill-circle size-20 rounded-full flex items-center justify-center bg-background-dark">
                    <span className="material-symbols-outlined text-primary text-3xl">data_object</span>
                  </div>
                  <span className="text-sm font-medium text-slate-300">React / Next</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="skill-circle size-20 rounded-full flex items-center justify-center bg-background-dark">
                    <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
                  </div>
                  <span className="text-sm font-medium text-slate-300">Node.js</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="skill-circle size-20 rounded-full flex items-center justify-center bg-background-dark">
                    <span className="material-symbols-outlined text-primary text-3xl">cloud</span>
                  </div>
                  <span className="text-sm font-medium text-slate-300">AWS / Cloud</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="skill-circle size-20 rounded-full flex items-center justify-center bg-background-dark">
                    <span className="material-symbols-outlined text-primary text-3xl">database</span>
                  </div>
                  <span className="text-sm font-medium text-slate-300">PostgreSQL</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="skill-circle size-20 rounded-full flex items-center justify-center bg-background-dark">
                    <span className="material-symbols-outlined text-primary text-3xl">layers</span>
                  </div>
                  <span className="text-sm font-medium text-slate-300">Tailwind</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="skill-circle size-20 rounded-full flex items-center justify-center bg-background-dark">
                    <span className="material-symbols-outlined text-primary text-3xl">token</span>
                  </div>
                  <span className="text-sm font-medium text-slate-300">TypeScript</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white/[0.02]" id="contact">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="lang-pt text-4xl font-bold text-white mb-6 leading-tight">
                  Vamos construir algo <span className="text-primary">extraordinário</span>
                </h2>
                <h2 className="lang-en text-4xl font-bold text-white mb-6 leading-tight">
                  Let's build something <span className="text-primary">extraordinary</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-slate-400 mb-8 leading-relaxed">
                  <span className="lang-pt">Quer você tenha uma ideia formada ou apenas uma centelha de inspiração, estou aqui
                    para ajudar a transformar sua visão em realidade através de engenharia robusta.</span>
                  <span className="lang-en">Whether you have a fully-formed idea or just a spark of inspiration, I'm here to help
                    bring your vision to life through robust engineering.</span>
                </p>
              </motion.div>



              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">mail</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email</p>
                      <p className="text-white font-medium">murilobonow07@gmail.com</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">location_on</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                        <span className="lang-pt">Localizado em</span>
                        <span className="lang-en">Based in</span>
                      </p>
                      <p className="lang-pt text-white font-medium">Florianópolis - SC, Brasil</p>
                      <p className="lang-en text-white font-medium">Florianópolis - SC, Brazil</p>
                    </div>

                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">language</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Github</p>
                      <a href="https://github.com/murilobonoww" className="text-white font-medium" target="_blank">github.com/murilobonoww</a>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Contact />
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/10 bg-background-dark">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="size-6 bg-primary rounded-sm flex items-center justify-center">
              <span className="material-symbols-outlined text-black text-xs font-bold">code</span>
            </div>
            <h2 className="text-lg font-bold tracking-tight text-white uppercase">MNB Portfolio</h2>
          </div>
          <p className="text-slate-500 text-sm">© 2024 Murilo Neves Bonow. <span className="lang-pt">Todos os direitos
            reservados.</span><span className="lang-en">All rights reserved.</span></p>
          <div className="flex gap-6">
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span
              className="material-symbols-outlined">public</span></a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span
              className="material-symbols-outlined">terminal</span></a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span
              className="material-symbols-outlined">account_circle</span></a>
          </div>
        </div>
      </footer>
    </>
  );
}