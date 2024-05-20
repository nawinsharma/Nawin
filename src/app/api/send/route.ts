import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY as string);
const fromEmail = process.env.FROM_EMAIL as string;

interface EmailRequest {
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { email, subject}: EmailRequest = await req.json();

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: (error as Error).message });
  }
}
