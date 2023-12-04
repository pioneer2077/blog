import React from "react";
import profileImage from "../../../public/images/rabbit.png";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="text-center ">
      <Image
        className="mx-auto rounded-full aspect-square"
        width={250}
        height={250}
        alt="Picture of my dream"
        src={profileImage}
        priority
      ></Image>
      <h2 className="text-3xl font-bold mt-2 ">용환</h2>
      <h3 className="text-xl font-semibold">Full-stack Engineer</h3>
      <p>꿈을 향해 달려가는 사람</p>
      <Link href={"/contact"}>
        <button className="bg-yellow-500 font-bold rounded py-1 px-4 mt-2">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
