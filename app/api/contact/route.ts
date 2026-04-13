import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { nome, email, assunto, mensagem } = await req.json()

  try {
    const result = await resend.emails.send({
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
    console.log('resultado:', result)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('erro:', err)
    return NextResponse.json({ ok: false, error: err }, { status: 500 })
  }
}