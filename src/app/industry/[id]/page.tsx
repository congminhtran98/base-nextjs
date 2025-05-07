// app/posts/[id]/page.tsx
import { getPostById } from "@/core/services/postService";

interface Params {
  params: {
    id: string;
  };
}

export default async function PostDetailPage({ params }: Params) {
  const post = await getPostById(params.id);

  if (!post)
    return <div className="text-center py-20">Post not found.</div>;

  const createdAt = new Date(post.createdAt);
  const date = {
    day: String(createdAt.getDate()).padStart(2, "0"),
    month: createdAt.toLocaleString("en-US", { month: "short" }),
    year: String(createdAt.getFullYear()),
  };

  return (
    <div className="mt-[84px]">
      {/* Banner */}
      <div
        className="h-[400px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(/images/p1.jpg)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-10 px-4 py-16">
        <div className="max-w-full mx-10">
          <h2 className="text-2xl font-bold text-[#aa0000] mb-4">{post.title}</h2>
          <p className="text-[#666] mb-6">{post.content}</p>

          <div className="space-y-3 text-sm text-[#444]">
            <div><strong>Date:</strong> {`${date.day} ${date.month} ${date.year}`}</div>
            <div><strong>Author:</strong> {post.author?.fullName || "N/A"}</div>
            <div><strong>Email:</strong> {post.author?.email || "N/A"}</div>
            <div><strong>Role:</strong> {post.author?.role || "N/A"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
