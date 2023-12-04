import React from "react";
import { getAllPosts, getCategories } from "../service/posts";
import FilteredPost from "../components/FilteredPost";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "All Posts",
  description: "용환 블로그의 모든 포스트",
};
export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = await getCategories();
  return (
    <section>
      <FilteredPost posts={posts} categories={categories} />
    </section>
  );
}
