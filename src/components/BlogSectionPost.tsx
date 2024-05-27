"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type Post = {
  id: number;
  userId: number;
  title: string;
  // Add other properties as needed
};

type ImageData = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  // Add other properties as needed
};

const BlogSectionPost = () => {
  const [posts, setPosts] = useState<Post[]>([]);
const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const fetchPostsAndImages = async () => {
      try {
        // Fetch posts
        const postsResponse = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=6"
        );
        if (!postsResponse.ok) {
          throw new Error("Failed to fetch posts");
        }
        const postsData = await postsResponse.json();

        // Fetch images
        const imagesResponse = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=6"
        );
        if (!imagesResponse.ok) {
          throw new Error("Failed to fetch images");
        }
        const imagesData = await imagesResponse.json();

        setPosts(postsData);
        setImages(imagesData);
      } catch (error) {
        console.error("Error fetching posts and images:", error);
      }
    };

    fetchPostsAndImages();
  }, []);

  if (posts.length === 0 || images.length === 0) {
    return <div className="bg-backgroundColor text-black">Loading...</div>;
  }

  return (
    <div className=" flex flex-row items-center justify-center container mx-auto">
      {/*  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {posts.map((post, index) => (
          <div key={post.id} className="flex flex-col items-center border p-5">
            <Link href={`/blog/${post.id}`}>
              <Image
                src={images[index].url}
                alt={`Post Image ${post.id}`}
                width={300}
                height={200}
                className="mb-5"
              />
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500">
                {new Date().toDateString()},{" "}
                <span>by Author {post.userId}</span>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSectionPost;
