import Image from "next/image"
import Style from "../page.module.css"

interface ImageProps {
    src: string,
    alt: string,
    srcStack: string,
    titleStack:string,
    gitHubUrl: string
}

interface TextProps {
    title: string,
    description: string
}

interface CardProps extends ImageProps, TextProps {}




export default function Cards({src, alt, srcStack, titleStack, title, description, gitHubUrl}: CardProps) {

    return (
        <>
            <section id="projetos" className={Style.projetos}>

                <div className={Style.projetoCard}>
                    <div className={Style.projetoInfo}>
                        <h3 className={Style.projetoTitulo}>{title}</h3>
                        <p className={Style.projetoDesc}>{description}</p>
                        <div className={Style.projetoTechs}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" title="NestJS" alt="NestJS" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" title="TypeScript" alt="TypeScript" />
                            <img src={srcStack} title={titleStack} />
                        </div>
                    </div>
                    <a href={gitHubUrl} target="_blank" className={Style.projetoImgLink}>
                        <Image
                            src={src}
                            alt={alt}
                            className={Style.projetoImg}
                            width={280}
                            height={180}

                        />
                    </a>
                </div>
            </section>



        </>
    )
}