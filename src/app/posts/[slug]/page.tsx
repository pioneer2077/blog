import MarkDownViewer from "@/app/components/MarkDownViewer";
import Image from "next/image";
import { getPostData } from "@/app/service/posts";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { AiTwotoneCalendar } from "react-icons/ai";
import BackAndForthPosts from "@/app/components/BackAndForthPosts";
import PostContent from "@/app/components/PostContent";
import AdjacentPostCard from "@/app/components/AdjacentPostCard";
type Props = {
  params: {
    slug: string;
  };
};
export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path, nextObject, prevObject } = post;
  return (
    <article className=" rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
        {nextObject && <AdjacentPostCard post={nextObject} type="prev" />}
        {prevObject && <AdjacentPostCard post={prevObject} type="next" />}
      </section>
    </article>
  );
}
