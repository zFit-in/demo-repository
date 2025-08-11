import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../posts/blogData';
import { BlogContentBlock, BlogPost } from '../types/blog';
import { Clock, CalendarDays } from 'lucide-react';
import './BlogPage.scss';

const getTextFromBlocks = (blocks: BlogContentBlock[]): string => {
  return blocks
    .map(b => {
      if (b.type === 'paragraph') return b.text;
      if (b.type === 'heading') return b.text;
      if (b.type === 'list') return b.items.join(' ');
      if (b.type === 'table') return b.rows.flat().join(' ');
      if (b.type === 'callout') return `${b.title ?? ''} ${b.text}`;
      return '';
    })
    .join(' ');
};

const estimateReadMinutes = (post: BlogPost): number => {
  const text = getTextFromBlocks(post.content);
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return minutes;
};

const BlogListPage = () => {
  return (
    <section className="blog-page">
      <Helmet>
        <title>ZFIT Blog | Nutrition, Fitness, and Healthy Eating</title>
        <meta
          name="description"
          content="Read ZFIT's blog on nutrition, protein, fitness, and healthy eating tips."
        />
        <link rel="canonical" href="https://zfit.in/blog" />
        <meta property="og:title" content="ZFIT Blog" />
        <meta
          property="og:description"
          content="Nutrition and fitness insights from ZFIT."
        />
      </Helmet>
      <div className="container">
        <div className="menu-header">
          <h2 className="section-title">Blog</h2>
          <p className="section-subtitle">
            Insights on nutrition, fitness, and ZFIT stories
          </p>
        </div>

        <div className="blog-feed">
          {blogPosts.map((post: BlogPost) => (
            <article key={post.slug} className="blog-feed-item">
              <div className="blog-feed-content">
                <Link to={`/blog/${post.slug}`} className="blog-feed-title">
                  {post.title}
                </Link>
                <p className="blog-feed-excerpt">{post.excerpt}</p>
                <div className="blog-feed-meta">
                  <span className="meta">
                    <CalendarDays size={16} />
                    <time dateTime={post.date}>{post.date}</time>
                  </span>
                  <span className="meta">
                    <Clock size={16} />
                    {estimateReadMinutes(post)} min read
                  </span>
                  <span className="meta category">{post.category}</span>
                </div>
              </div>
              <Link to={`/blog/${post.slug}`} className="blog-feed-thumb">
                <img src={post.image} alt={post.title} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListPage;
