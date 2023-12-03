"use client";
import React, { useState } from "react";
import { Post } from "../service/posts";
import PostsGrid from "./PostsGrid";
import FilterSelector from "./FilterSelector";
type Props = {
  posts: Post[];
  categories: string[];
};
export const ALL_POSTS = "All Posts";
export default function FilteredPost({ posts, categories }: Props) {
  const [feature, setFeature] = useState(ALL_POSTS);
  const filteredPosts =
    feature === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === feature);
  return (
    <section className="flex m-4">
      <PostsGrid posts={filteredPosts} />
      <FilterSelector
        selectedFeature={feature}
        filteredCategories={[ALL_POSTS, ...categories]}
        handleFeature={setFeature}
      />
    </section>
  );
}
