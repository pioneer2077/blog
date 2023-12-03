import MarkDownViewer from "@/app/components/MarkDownViewer";
import Image from "next/image";
import { getPostData } from "@/app/service/posts";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { AiTwotoneCalendar } from "react-icons/ai";
type Props = {
  params: {
    slug: string;
  };
};
export default async function PostPage({ params: { slug } }: Props) {
  const { category, content, date, description, featured, path, title } =
    await getPostData(slug);

  return (
    <article>
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section>
        <div>
          <AiTwotoneCalendar />
        </div>
        <p>{date.toString()}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <MarkDownViewer content={content} />
      </section>
    </article>
  );
}
