import React from "react";
export type BannerData = {
  message: string;
  state: "success" | "error";
};
export default function Banner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  const isSuccess = state === "success";
  const icon = isSuccess ? "✅" : "❌";
  return (
    <p
      className={`w-full text-center px-4 py-2 mx-auto my-4 ${
        isSuccess ? "bg-green-300" : "bg-red-300"
      } rounded-md shadow-sm text-white font-bold`}
    >{`${icon} ${message}`}</p>
  );
}
