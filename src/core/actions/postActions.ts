"use server";

import {getPostById, getAllPosts} from "../services/postService";


export async function getPostByIdDetail(id: string) {
  try {
    const post = await getPostById(id);
    if (!post) {
      throw new Error("Post not found");
    }
    return post;
  } catch (error) {
    console.error("Fetch post details failed:", error);
    return null;
  }
}

export async function getAllPostsData() {
  try {
    const posts = await getAllPosts();
    return posts;
  } catch (error) {
    console.error("Fetch all posts failed:", error);
    return [];
  }
}
