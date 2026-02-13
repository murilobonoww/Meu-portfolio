import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
    const formRef = useRef();

    // Relaxe, essas chaves não são sensíveis :) Emailjs é uma ferramenta feita para rodar no lado do cliente.
    const SERVICE_ID = "service_z1wuapm"
    const TEMPLATE_ID = "template_ps12x6d"
    const PUBLIC_KEY = "IrXQO8rfj0lNqpgu5"

    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current,
                PUBLIC_KEY
            )
            .then(() => {
                alert("Mensagem enviada com sucesso!");
            })
            .catch((err) => {
                console.error(err);
                alert("Erro ao enviar mensagem");
            });
    }

    return (
        <form ref={formRef} id="form_" onSubmit={sendEmail} className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        <span className="lang-pt">Nome</span>
                        <span className="lang-en">Name</span>
                    </label>
                    <input
                        name="name"
                        className="w-full bg-black/50 border-white/10 rounded-lg text-white placeholder:text-slate-600 focus:border-primary focus:ring-primary/20"
                        placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</label>
                    <input
                        name="email"
                        className="w-full bg-black/50 border-white/10 rounded-lg text-white placeholder:text-slate-600 focus:border-primary focus:ring-primary/20"
                        placeholder="john@example.com" type="email" />
                </div>
            </div>
            <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <span className="lang-pt">Assunto</span>
                    <span className="lang-en">Subject</span>
                </label>
                <input
                    name="subject"
                    className="w-full bg-black/50 border-white/10 rounded-lg text-white placeholder:text-slate-600 focus:border-primary focus:ring-primary/20"
                    placeholder="Project Inquiry" type="text" />
            </div>
            <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <span className="lang-pt">Mensagem</span>
                    <span className="lang-en">Message</span>
                </label>
                <textarea
                    name="message"
                    className="w-full bg-black/50 border-white/10 rounded-lg text-white placeholder:text-slate-600 focus:border-primary focus:ring-primary/20"
                    placeholder="Tell me about your project..." rows="4"></textarea>
            </div>
            <button
                className="w-full py-4 bg-primary text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(37,244,106,0.3)] transition-all flex items-center justify-center gap-2"
                type="submit">
                <span className="lang-pt">Enviar Mensagem</span>
                <span className="lang-en">Send Message</span>
                <span className="material-symbols-outlined text-xl">send</span>
            </button>
        </form>
    );
}