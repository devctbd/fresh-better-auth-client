import { Resend } from "resend";

interface SendEmailProps {
  to: string;
  subject: string;
  text: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ to, subject, text }: SendEmailProps) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to,
    subject,
    text,
  });
};
