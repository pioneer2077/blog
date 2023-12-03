import React from "react";
import { getAllPosts, getCategories } from "../service/posts";
import FilteredPost from "../components/FilteredPost";

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = await getCategories();
  return (
    <section>
      <FilteredPost posts={posts} categories={categories} />
    </section>
  );
}
