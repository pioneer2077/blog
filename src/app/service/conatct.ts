import { EmailData } from "./email";

export async function sendContactEmail(email: EmailData) {
  const res = await fetch("/api/mail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "서버 요청 실패");
  }
  return data;
}
