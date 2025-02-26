"use client";

import { useState } from "react";
import Image from "next/image";
import { ThumbsUp, Share2 } from "lucide-react";

export default function LinkedInFeed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Microsoft",
      time: "1 day ago",
      content:
        "Introducing Majorana 1—the world’s first quantum processor powered by topological qubits.",
      image: "/images/post1.jpg",
      likes: 7,
      shares: 2,
    },
    {
      id: 2,
      author: "Microsoft",
      time: "2 days ago",
      content:
        "At Microsoft, employee well-being goes beyond just physical health—it includes...",
      image: "/images/post1.jpg",
      likes: 116,
      shares: 4,
    },
    {
      id: 3,
      author: "Satya Nadella",
      time: "2 days ago",
      content:
        "If you thought AI-generated text, images, and video were cool, just imagine entire interactive...",
      image: "/images/post1.jpg",
      likes: 1603,
      shares: 10,
    },
    {
      id: 4,
      author: "Satya Nadella",
      time: "2 days ago",
      content:
        "A couple reflections on the quantum computing breakthrough we just achieved.",
      image: "/images/post1.jpg",
      likes: 60000,
      shares: 100,
    },
    {
      id: 5,
      author: "Microsoft",
      time: "2 days ago",
      content:
        "Foundry a interviewat peste 150 de lideri din domeniul securității IT pentru a...",
      image: "/images/post1.jpg",
      likes: 2,
      shares: 1,
    },
  ]);

  return (
    <section className="w-full container mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:my-[200px]">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
            {/* Author + Time */}
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-semibold">{post.author}</p>
              <span className="text-xs text-gray-500">{post.time}</span>
            </div>

            {/* Content */}
            <p className="text-sm text-gray-700 mb-2">{post.content}</p>

            {/* Image (Nếu có) */}
            {post.image && (
              <div className="w-full h-[150px] relative mb-3">
                <Image
                  src={post.image}
                  alt="Post Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            )}

            {/* Reactions */}
            <div className="flex justify-between text-gray-500 text-sm">
              <div className="flex items-center space-x-2">
                <ThumbsUp className="w-4 h-4" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Share2 className="w-4 h-4" />
                <span>{post.shares} Share</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
