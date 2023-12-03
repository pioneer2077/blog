import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};
export type PostData = Post & {
  content: string;
  prevObject: Post | null;
  nextObject: Post | null;
};
export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

export async function getCategories(): Promise<string[]> {
  return getAllPosts().then((posts) => {
    const categories = posts
      .map((post) => post.category)
      .filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
    return categories;
  });
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const metadata = await getAllPosts().then((post) =>
    post.find((post) => post.path === fileName)
  );
  if (!metadata) throw new Error(`${fileName} 포스트를 찾을 수 없음`);
  const content = await readFile(filePath, "utf-8");

  const posts = await getAllPosts();
  // 주어진 배열에서 해당 id를 가진 객체의 인덱스를 찾기
  const targetIndex = posts.findIndex((obj) => obj.path === metadata.path);

  // 해당 id를 가진 객체가 없는 경우 빈 배열을 리턴
  if (targetIndex === -1) {
    throw new Error(`${fileName} 포스트를 찾을 수 없음`);
  }

  // 앞, 뒤 객체의 인덱스 계산
  const prevIndex = targetIndex - 1;
  const nextIndex = targetIndex + 1;

  // 앞, 뒤 객체가 존재하는지 확인하고 리턴
  const prevObject = prevIndex >= 0 ? posts[prevIndex] : null;
  const nextObject = nextIndex < posts.length ? posts[nextIndex] : null;
  return { ...metadata, content, prevObject, nextObject };
}
