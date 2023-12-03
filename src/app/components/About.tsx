import React from "react";
const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";
export default function About() {
  return (
    <section className="w-full bg-gray-200 rounded-sm text-center flex flex-col gap-4 py-8 mt-8 shadow-sm">
      <h2 className={TITLE_CLASS}>Who Am I?</h2>
      <p>
        개발이 천직인 프론트엔드 개발자 <br />
        user experience의 증진을 꿈꿈
      </p>
      <h2 className={TITLE_CLASS}>Career</h2>
      <p className="">Tim Solution{"(~2023)"}</p>
      <h2 className={TITLE_CLASS}>Skills</h2>
      <p>
        React, NextJS, Typescript <br /> git, postgresql,NestJS
      </p>
    </section>
  );
}
