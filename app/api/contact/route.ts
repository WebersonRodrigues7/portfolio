import { Resend } from "resend";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    const { nome, email, assunto, mensagem } = await req.json()
    const resend = new Resend(process.env.RESEND_API_KEY)



    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'webersongiovani@gmail.com',
        replyTo: email,
        subject: `${nome} - ${assunto}`,
        html: `
            <p><b>Nome:</b> ${nome}</p>
            <p><b>Email:</b> ${email}</p>   
            <p><b>Assunto:</b> ${assunto}</p>
            <p><b>Mensagem:</b> ${mensagem}</p>
        `
    })

    return NextResponse.json({ ok: true })
}