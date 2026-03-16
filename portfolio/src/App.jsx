import { Fragment, useEffect, useState } from "react";
import './App.css';
import GlitchText from './components/GlitchText';
import Noise from './components/Noise';
import TextType from './components/TextType';
import { motion } from "framer-motion"
import Contact from "./components/Contact";
import React from "react";
import { ArrowRight, X } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('pt');
  const portugueseMode = document.getElementById("lang-toggle")?.checked;
  const [openXP, setOpenXP] = useState([])
  const [openXP0, setOpenXP0] = useState(false)
  const [openXP1, setOpenXP1] = useState(false)
  const [openXP2, setOpenXP2] = useState(false)
  const [currentImg, setCurrentImg] = useState(0)
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)

  const techs = [
    { name: "JavaScript", icon: "js.png" },
    { name: "TypeScript", icon: "ts.png" },
    { name: "React", icon: "react.png" },
    { name: "Angular", icon: "angular.png" },
    { name: "Node.js", icon: "node.png" },
    { name: "Python", icon: "py.png" },
    { name: "Tailwind CSS", icon: "tailwind.png" },
    { name: "MySQL", icon: "mysql.png" },
    { name: "PostgreSQL", icon: "postgres.png" },
    { name: "Linux", icon: "linux.png" },
  ]

  const jobs = [
    {
      title: "Desenvolvedor Full-Stack Pleno",
      title_en: "Mid-Level Full-Stack Developer",
      company: "Cantinho das Pizzas e do Açaí",
      period: "2026 - atual",
      description: "Desenvolvimento em andamento de um sistema ERP completo para automação operacional, com projeção de redução superior a R$ 3.000/mês em custos operacionais e ganho significativo de eficiência nos processos internos. Implementação de chatbot para WhatsApp integrado à API da OpenAI, com back-end unificado em Node.js, responsável pelo processamento automatizado de pedidos e comunicação em tempo real. Desenvolvimento de painel web em React (JavaScript), Node.js e MySQL, centralizando toda a operação do delivery, incluindo: Gestão completa de pedidos (histórico, filtros, edição, impressão e exclusão), Dashboard financeiro com métricas estratégicas (ex: ticket médio, produto mais vendido, formas de pagamento), Gerenciamento dinâmico de produtos com integração direta ao banco de dados",
      description_en: "Ongoing development of a complete ERP system for operational automation, projected to reduce operational costs by over R$ 3,000/month and significantly increase efficiency in internal processes. Implementation of a WhatsApp chatbot integrated with the OpenAI API, with a unified back-end in Node.js, responsible for automated order processing and real-time communication. Development of a web panel in React (JavaScript), Node.js, and MySQL, centralizing the entire delivery operation, including: Comprehensive order management (history, filters, editing, printing, and deletion), Financial dashboard with strategic metrics (e.g., average ticket, best-selling product, payment methods), Dynamic product management with direct database integration."
    },
    {
      title: "Desenvolvedor Full-Stack Júnior",
      title_en: "Junior Full-Stack Developer",
      company: "Cantinho das Pizzas e do Açaí",
      period: "2025 - 2026",
      description: "Desenvolvimento em andamento de um sistema ERP completo para automação operacional, com projeção de redução superior a R$ 3.000/mês em custos operacionais e ganho significativo de eficiência nos processos internos. Implementação de chatbot para WhatsApp integrado à API da OpenAI, com back-end unificado em Node.js, responsável pelo processamento automatizado de pedidos e comunicação em tempo real. Desenvolvimento de painel web em React (JavaScript), Node.js e MySQL, centralizando toda a operação do delivery, incluindo: Gestão completa de pedidos (histórico, filtros, edição, impressão e exclusão), Dashboard financeiro com métricas estratégicas (ex: ticket médio, produto mais vendido, formas de pagamento), Gerenciamento dinâmico de produtos com integração direta ao banco de dados",
      description_en: "Ongoing development of a complete ERP system for operational automation, projected to reduce operational costs by over R$ 3,000/month and significantly increase efficiency in internal processes. Implementation of a WhatsApp chatbot integrated with the OpenAI API, with a unified back-end in Node.js, responsible for automated order processing and real-time communication. Development of a web panel in React (JavaScript), Node.js, and MySQL, centralizing the entire delivery operation, including: Comprehensive order management (history, filters, editing, printing, and deletion), Financial dashboard with strategic metrics (e.g., average ticket, best-selling product, payment methods), Dynamic product management with direct database integration."
    },
    {
      title: "Analista de Inteligência de Negócios",
      title_en: "Business Intelligence Analyst",
      company: "ESP Inteligência de Negócios",
      period: "2025 - 2025",
      description: "Desenvolvimento de indicadores, relatórios e dashboards em BI (Power BI). Levantamento de requisitos e proposição de soluções alinhadas às melhores práticas de mercado. Integração e sincronização de dados entre sistemas e bancos de dados. Criação e gestão de usuários e permissões no Power BI. Automação de rotinas e processos de dados. Suporte ao cliente e apoio técnico. Documentação técnica e participação em reuniões estratégicas internas.",
      description_en: "Development of indicators, reports, and dashboards in BI (Power BI). Requirements gathering and proposal of solutions aligned with best market practices. Data integration and synchronization between systems and databases. Creation and management of users and permissions in Power BI. Automation of data routines and processes. Customer support and technical assistance. Technical documentation and participation in internal strategic meetings."
    }
  ]

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

  const toggleXP = (index) => {
    setOpenXP((prev) => {
      const updated = [...prev]
      updated[index] = !updated[index]
      return updated
    })
  }

  const erp_prints = [
    { id: 0, source: 'print_erp_1.png' },
    { id: 1, source: 'print_erp_2.png' },
    { id: 2, source: 'print_erp_3.png' },
    { id: 3, source: 'print_erp_4.png' },
  ]

  const nextImage = () => {
    if (currentImg <= 2) {
      setCurrentImg(prev => prev + 1)
    }
    else {
      setCurrentImg(0)
    }
    console.log(currentImg)
  }

  const toggleProjectModal = () => {
    setIsProjectModalOpen(!isProjectModalOpen)
  }

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
                <a className="px-8 py-4 rounded-lg bg-primary text-black font-bold text-[1rem] md:text-[1.2rem] hover:shadow-[0_0_30px_rgba(37,244,106,0.4)] transition-all"
                  href="#projects">
                  <span className="lang-pt">Ver Portfólio</span>
                  <span className="lang-en">View Portfolio</span>
                </a>

                <a className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-[1rem] md:text-[1.2rem] hover:bg-white/10 transition-all"
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
                  className="material-symbols-outlined text-[160px]!"
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
                <h2 className="text-[1.2rem] md:text-3xl font-bold text-white tracking-tight">
                  <span className="lang-pt">Experiência Profissional</span>
                  <span className="lang-en">Professional Experience</span>
                </h2>

              </motion.div>
            </div>
            <div className="grid grid-cols-[40px_1fr] gap-x-6">
              {jobs.map((job, index) => (
                <React.Fragment key={index}>

                  {/* COLUNA ESQUERDA - ÍCONE */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center justify-center size-10 rounded-full border border-primary/40 bg-primary/5">
                      <span className="material-symbols-outlined text-primary/80 text-xl">
                        code
                      </span>
                    </div>
                    <div className="w-0.5 bg-primary/10 grow my-1"></div>
                  </div>

                  {/* COLUNA DIREITA - CONTEÚDO */}
                  <div className="pb-8">
                    <h3 className="text-[1rem] md:text-xl font-bold text-white">
                      <span className="lang-pt">{job.title}</span>
                      <span className="lang-en">{job.title_en}</span>
                    </h3>

                    <p className="text-primary/80 text-[0.8rem] md:text-[1rem] font-medium mb-2">
                      {job.company} • {job.period}
                    </p>

                    <button
                      onClick={() => toggleXP(index)}
                      className="bg-primary w-fit px-5 py-1 rounded-[10px] mt-[10px] text-black"
                    >
                      {openXP[index] ? "Ocultar" : "Ver mais"}
                    </button>

                    {openXP[index] && (
                      <p className="text-slate-400 text-[0.7rem] md:text-[0.9rem] leading-relaxed mt-3">
                        <span className="lang-pt">{job.description}</span>
                        <span className="lang-en">{job.description_en}</span>
                      </p>
                    )}
                  </div>

                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6" id="projects">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex justify-between items-end mb-6">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <span className="material-symbols-outlined text-primary text-3xl">grid_view</span>
                  <h2 className="text-[1.4rem] font-bold text-white tracking-tight">
                    <span className="lang-pt">Projetos em Destaque</span>
                    <span className="lang-en">Featured Projects</span>
                  </h2>
                </div>
              </div>
              {/* <a className="text-primary text-sm font-bold border-b border-primary/30 hover:border-primary pb-1 transition-all"
                href="#">
                <span className="lang-pt">Ver todos os projetos</span>
                <span className="lang-en">View all projects</span>
              </a> */}
            </div>

            {isProjectModalOpen && (
              <div className="modal-overlay">
                <div className="modal">

                  <div className="modal-image flex flex-col">
                    <img id="projectImage" src={erp_prints[currentImg].source} />
                    <button
                      onClick={nextImage}
                      className="text-white bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300 active:bg-gray-400">
                      <ArrowRight size={20} />
                    </button>
                  </div>

                  <div className="modal-content">
                    <button className="w-fit p-5 self-end cursor-pointer" onClick={toggleProjectModal}>
                      <X size={24} />
                    </button>
                    <h2 className="mt-5">Projeto Cantinho Desktop</h2>

                    <p className="leading-relaxed pr-7">
                      Sistema ERP que realiza gestão de todo o negócio de uma pizzaria em São Paulo.
                      Automatiza atendimento ao cliente utilizando IA, processamento, histórico e impressão de pedidos, dashboard financeiro, mapa com localização em tempo-real de entregadores, controle de pedidos e muito mais!

                    </p>
                  </div>

                </div>
              </div>
            )}


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                onClick={toggleProjectModal}
              >
                <div
                  className="group bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-primary/40 transition-all cursor-pointer">
                  <div className="h-48 bg-slate-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtCfVPfI5EzIy106PJJPajwQ-1baaWtEiefPyk1sC_wdW_y2C_M88ELqhpdChUwmvU6vTMuAStfua2GkAYbzHYo0uhd6GB7kqgNQJptMw8Cah4p9mx2Su0qhp7bSwi--KaVJDMZJo-mSgTc1tlen2QP1sQhqp0f9nxp0aAHm_XzhUDPMTn0gAPTwR9u1t8YOVFoaaTqctFOc47lb3Gu7x7fjdDBBHMRpc49KNNqxzKuLeCTAqNRIA7tnHiNohdXoEAUNO58og_HvE')" }}>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                      <img src="print_erp_1.png" />
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                  >

                    <div className="p-6">
                      <div className="flex gap-2 mb-3">
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">REACT.JS</span>
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">NODE.JS</span>
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">MySQL</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Sistema ERP</h3>
                      <p className="text-slate-400 text-sm mb-4">
                        <span className="lang-pt">Sistema ERP completo para gestão da empresa Cantinho das Pizzas e do Açaí</span>
                        <span className="lang-en">Complete ERP system for company management.</span>
                      </p>
                      {/* <a className="inline-flex items-center gap-2 text-primary text-sm font-bold group-hover:gap-3 transition-all"
                        href="#">
                        <span className="lang-pt">Conferir</span><span className="lang-en">Check</span> <span
                          className="material-symbols-outlined text-sm">arrow_forward</span>
                      </a> */}
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
              <h2 className="text-[1.8rem] font-bold text-white tracking-tight">
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
                <p className="lang-pt text-[1.8rem]">Arsenal Técnico</p>
                <p className="lang-en text-[1.8rem]">Technical Arsenal</p>
                {/* </GlitchText> */}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="lang-pt text-slate-400 max-w-2xl mx-auto mt-5">
                  Focado em tecnologias web modernas e construção de arquiteturas escaláveis e sustentáveis.
                </p>
                <p className="lang-en text-slate-400 max-w-2xl mx-auto mt-10">
                  Focused on modern web technologies and building scalable, maintainable architectures.
                </p>
              </motion.div>

              <div className="flex gap-6 flex-wrap justify-center px-6 mt-12">
                {techs.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex flex-col items-center gap-3 hover:-translate-y-0.5 transition-transform duration-300">
                      <img src={`/${tech.icon}`} className="skill-circle size-20 rounded-full flex items-center justify-center bg-background-dark" />
                      <span className="text-sm font-medium text-slate-300">{tech.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>


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
                <h2 className="lang-pt text-[1.8rem] font-bold text-white mb-6 leading-tight">
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
          <p className="text-center  lg:text-slate-500 lg:text-sm">© 2024 Murilo Neves Bonow. <span className="lang-pt">Todos os direitos
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