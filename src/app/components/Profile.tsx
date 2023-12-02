import React from "react";
export default function Profile() {
  return (
    <section className="w-full flex items-center h-96 bg-sky-100">
      <div className="flex flex-col items-center w-full">
        <img
          src={"../../images/lucy.jpeg"}
          alt="profile"
          className="rounded-full w-32 h-32"
        />
        <h1 className="text-2xl font-bold">{"Lucy"}</h1>
        <p className="text-sm text-gray-500">{"Frontend Developer"}</p>
      </div>
    </section>
  );
}
