import { sendEmail } from "@/app/service/email";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as yup from "yup";

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});
export async function POST(req: Request) {
  const body = await req.json();
  console.log({ 그냥바디: req.body, async바디: body });
  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: "메일 전송 실패" }));
  } //적절한 포맷인지 확인
  return sendEmail(body)
    .then(
      () =>
        new Response(JSON.stringify({ message: "메일 전송 완료" }), {
          status: 200,
        })
    )
    .catch((err) => {
      console.log(err);
      return new Response(JSON.stringify({ message: "메일 전송 실패" }), {
        status: 500,
      });
    });
}
