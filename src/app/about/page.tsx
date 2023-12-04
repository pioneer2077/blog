import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Me",
  description: "용환의 커리어 소개",
};
export default function page() {
  return (
    <section>
      <Hero />
      <About />
    </section>
  );
}
