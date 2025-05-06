import api from "@/constant/axios";

export async function getAllPosts() {
  const response = await api.get("/posts");
  return response.data?.data || [];
}

export async function getPostById(id: string) {
  const response = await api.get(`/posts/${id}`);
  return response.data?.data || null;
}
