import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PostInfo {
  id: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  author?: {
    name: string;
    role?: string;
    avatar?: string;
  };
  link: string;
}

interface FeaturedPostSectionProps {
  featuredPost: PostInfo;
  sidePosts: PostInfo[];
}

const FeaturedPostSection: React.FC<FeaturedPostSectionProps> = ({
  featuredPost,
  sidePosts,
}) => {
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-[#f8f9fa] py-20 mb-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* Main Post */}
        <div className="flex-1 bg-white rounded-xl shadow-xl overflow-hidden flex flex-col">
          <div className="relative h-[300px]">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 flex flex-col">
            <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
              <i className="fa fa-calendar" /> {formatDate(featuredPost.date)}
            </p>
            <h3 className="text-xl font-bold text-[#333] mb-4">
              {featuredPost.title}
            </h3>
            <p className="text-sm text-[#666] mb-6">{featuredPost.summary}</p>
            {featuredPost.author && (
              <div className="flex items-center gap-3 mb-4">
                {featuredPost.author.avatar && (
                  <Image
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <div>
                  <p className="text-sm font-semibold">
                    {featuredPost.author.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {featuredPost.author.role}
                  </p>
                </div>
              </div>
            )}
            <Link
              href={featuredPost.link}
              className="text-red-600 font-semibold text-sm mt-auto hover:underline"
            >
              Read More <i className="fa fa-arrow-right ml-1" />
            </Link>
          </div>
        </div>

        {/* Side Posts */}
        <div className="flex flex-col gap-6 w-[320px]">
          {sidePosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative h-[120px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col">
                <p className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                  <i className="fa fa-calendar" /> {formatDate(post.date)}
                </p>
                <h4 className="text-sm font-semibold mb-3">{post.title}</h4>
                <Link
                  href={post.link}
                  className="text-red-600 text-xs font-semibold hover:underline"
                >
                  Read More <i className="fa fa-arrow-right ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostSection;
