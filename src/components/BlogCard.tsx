import React from "react";

interface BlogCardProps {
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  authorImage: string;
  color: string;
  icon: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ category, readTime, title, excerpt, author, authorImage, color, icon }) => {
  return (
    <article className="blog-card rounded-xl shadow-card card-hover overflow-hidden">
      <div className={`blog-image bg-gradient-to-br from-${color}-100 to-${color}-200 flex items-center justify-center`}>
        <div className="text-4xl">{icon}</div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <span className={`blog-category bg-${color}-500`}>{category}</span>
          <span className="read-time">{readTime}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={authorImage} alt={author} className="w-6 h-6 rounded-full" />
            <span className="text-sm text-gray-500">{author}</span>
          </div>
          <button className="text-primary hover:text-primary-dark font-medium text-sm">
            Read More →
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
