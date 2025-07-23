"use client";
import React from "react";
import { useSelector } from "react-redux";
import Layout from "@/components/Layout";
import BlogCard from "@/components/BlogCard";
import { RootState } from "@/lib/store";

const BlogsPage = () => {
  const blogs = useSelector((state: RootState) => state.blogs.blogs);

  return (
    <Layout>
      <main className="p-6">
        <div className="mb-8 animate-fade-in-up animate-delay-300">
          <div className="blog-card rounded-2xl p-8 shadow-card card-hover relative overflow-hidden">
            {/* Featured Article */}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default BlogsPage;
