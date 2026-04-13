"use client"
import z from "zod"
import { useForm } from "react-hook-form"
import { gsap } from "gsap"
import Style from "./page.module.css"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import { useRef, useEffect, useState } from "react"
import Cards from "./components/card"
import {zodResolver} from "@hookform/resolvers/zod"
import Image from "next/image"



gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger)

const schema = z.object({
  nome: z.string().min(3, "3 Caracteres minímos no nome!"),
  email: z.email("Email inválido!"),
  assunto: z.string().min(5, "5 Caracteres minímos!")
})

export type ContactSchema = z.infer<typeof schema>

export default function Home() {

  const progressRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const myphotoRef = useRef<any>(null)
  const digitRef = useRef<any>(null)
  const [mensagem, setMensagem] = useState('')


  
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },} = useForm<ContactSchema>({
      resolver: zodResolver(schema)
    })
    
    async function onsubmit(data: ContactSchema) {
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ ...data, mensagem}),
        headers: { 'Content-Type': 'application/json'}
      })
      reset()
    }


  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(digitRef.current, { text: "< Olá Devs />", duration: 2, ease: "none" })
      .to(digitRef.current, { text: { value: "", rtl: true }, duration: 1, ease: "none", delay: 0.3 })
      .to(digitRef.current, { text: "Desenvolvedor Backend", duration: 2, ease: "none", delay: 0.3 })
      .to(digitRef.current, { text: { value: "", rtl: true }, duration: 1, ease: "none", delay: 0.3 })

    gsap.from(myphotoRef.current, {
      opacity: 0,
      x: -200,
      duration: 2
    }) 

    gsap.to(progressRef.current, {
      scrollTrigger: {
        scrub: true,
      },
      width: "100%",
      ease: "none"
    })
  }, [])

  return (
    <>
      <div ref={progressRef} className={Style.progresso}>.</div>

      <header ref={headerRef} className={Style.header}>
        <ul className={Style.headerNav}>
          <li><a href="#name">Home</a></li>
          <li><a href="#habilidades">Ferramentas</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Fale Comigo</a></li>
        </ul>
      </header>

      <main className={Style.main}>
        <h1 className={Style.name}>Weberson Rodrigues</h1>
        <h1 ref={digitRef} className={Style.digitando}></h1>

        
          <Image
            ref={myphotoRef}
            src="/imagens/buss.jpeg"
            alt="Minha foto"
            className={Style.minhaFoto}
            width={180}
            height={180}
          />
        

        <section>
          <h2 className={Style.subtitulo}>Sobre mim</h2>
          <article>
            <p className={Style.bio}>
              Meu nome é Weberson, tenho 17 anos e sou desenvolvedor com foco em backend.
              Tenho estudado programação a 1 ano e meio e usando tecnologias como TypeScript, JavaScript, NestJS, REST APIs e Git.
              Atualmente aprendendo React e expandindo para o frontend.
              Meu objetivo é atual e ser um desenvolvedor fullstack.
            </p>
          </article>
        </section>

        <h3>FERRAMENTAS</h3>
        <article className={Style.habilidadesArticle}>
          <div id="habilidades" className={Style.habilidades}>
            <div className={Style.habilidadeItem}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" />
              <span>TypeScript</span>
            </div>
            <div className={Style.habilidadeItem}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className={Style.habilidadeItem}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" alt="NestJS" />
              <span>NestJS</span>
            </div>
            <div className={Style.habilidadeItem}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
              <span>React</span>
            </div>
            <div className={Style.habilidadeItem}>
              <Image src="/imagens/pythonpq.png" alt="Python" width={50} height={50} />
              <span>Python</span>
            </div>
            <div className={Style.habilidadeItem}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" />
              <span>Git</span>
            </div>
            <div className={Style.habilidadeItem}>
              <Image src="/imagens/html5pq.png" alt="HTML5" width={50} height={50} />
              <span>HTML</span>
            </div>
            <div className={Style.habilidadeItem}>
              <Image src="/imagens/css3pq.png" alt="CSS3" width={50} height={50} />
              <span>CSS</span>
            </div>
          </div>
        </article>

        <h3>PROJETOS</h3>
        <section id="projetos" className={Style.projetos}>
          <Cards
            title="API DE TAREFAS"
            description="API criada para o gerenciamento de tarefas"
            src="/imagens/api.png"
            alt="api-tarefa"
            srcStack="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
            titleStack="MySQL"
            gitHubUrl="https://github.com/WebersonRodrigues7/api-tarefas"
          />

          <Cards
            title="API DE MATRÍCULAS"
            description="API criada para gerenciar matrículas de curso"
            src="/imagens/api.png"
            alt="api-matriculas"
            srcStack="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
            titleStack="MySQL"
            gitHubUrl="https://github.com/WebersonRodrigues7/api-matriculas"
          />
          <Cards
            title="API BARBEARIA"
            description="Gerenciamento de agendamentos para barbearia"
            src="/imagens/api.png"
            alt="api-barbearia"
            srcStack="/imagens/postgresql.jpeg"
            titleStack="postgres"
            gitHubUrl="https://github.com/WebersonRodrigues7/sistema-barbearia"
          />

        </section>
      </main>

      <section id="contato" className={Style.contato}>
        <p className={Style.contatoLabel}>// fale comigo</p>
        <h2 className={Style.contatoTitulo}>Vamos conversar?</h2>
        <p className={Style.contatoSub}>Estou disponível para oportunidades, freelas ou só trocar uma ideia.</p>

        <form className={Style.form} onSubmit={handleSubmit(onsubmit)}>
          <div className={Style.contactsform}>
            <input {...register('nome')}  type="text" placeholder="NOME" />
            <input {...register('email')} type="text" placeholder="EMAIL" />
          </div>
          <div className={Style.contactsform}>
            <input className={Style.inputAssunto} {...register('assunto')}  type="text" placeholder="ASSUNTO" />
          </div>
          <div className={Style.divMensagem}>
            <textarea className={Style.mensagem} onChange={(e) => setMensagem(e.target.value)} placeholder="MENSAGEM" />
          </div>
          {errors.nome && <p>{errors.nome.message}</p>}
          {errors.email && <p>{errors.email.message}</p>}
          <div className={Style.divBtn}>
            <button type="submit">Enviar</button>

          </div>
        </form>

        <a href="#name" className={Style.btnVoltar}>↑ Voltar ao topo</a>
      </section>

      <footer className={Style.footer}>
        <p className={Style.footerCopy}>
          Desenvolvido por <span className={Style.footerName}>Weberson Rodrigues</span>
        </p>
        <div className={Style.footerLinks}>
          <a href="https://github.com/WebersonRodrigues7" target="_blank" rel="noreferrer">
            <Image src="/imagens/icone-github.png" alt="GitHub" width={24} height={24} />
          </a>
          <a href="https://instagram.com/rodriguezgvnn" target="_blank" rel="noreferrer">
            <Image src="/imagens/icone-instagram.png" alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com/in/weberson-giovani-226792377/" target="_blank" rel="noreferrer">
            <Image src="/imagens/icone-linkedin.png" alt="LinkedIn" width={24} height={24} />
          </a>
        </div>
      </footer>
    </>
  )
}
