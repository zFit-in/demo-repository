import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../posts/blogData';
import { BlogContentBlock, BlogPost } from '../types/blog';
import './BlogPage.scss';

const renderBlock = (block: BlogContentBlock, index: number) => {
  switch (block.type) {
    case 'heading': {
      const Tag = `h${block.level}` as unknown as React.ElementType;
      return (
        <Tag key={index} className={`blog-h${block.level}`}>
          {block.text}
        </Tag>
      );
    }
    case 'paragraph':
      return (
        <p key={index} className="blog-p">
          {block.text}
        </p>
      );
    case 'list':
      return block.ordered ? (
        <ol key={index} className="blog-list ordered">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      ) : (
        <ul key={index} className="blog-list">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case 'table':
      return (
        <div key={index} className="blog-table-wrapper">
          <table className="blog-table">
            <thead>
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'callout':
      return (
        <div key={index} className={`blog-callout ${block.tone ?? 'info'}`}>
          {block.title && (
            <strong className="callout-title">{block.title}</strong>
          )}
          <p className="callout-text">{block.text}</p>
        </div>
      );
    case 'divider':
      return <hr key={index} className="blog-divider" />;
    case 'image':
      return (
        <figure key={index} className="blog-figure">
          <img src={block.src} alt={block.alt} />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    default:
      return null;
  }
};

const BlogPostPage = () => {
  const { slug } = useParams();

  const post: BlogPost | undefined = useMemo(
    () => blogPosts.find((p: BlogPost) => p.slug === slug),
    [slug]
  );

  if (!post) {
    return (
      <section className="blog-page">
        <div className="container">
          <p>Post not found.</p>
          <Link to="/blog" className="btn btn-secondary">
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="blog-post-page">
      <Helmet>
        <title>{post.title} | ZFIT Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://zfit.in/blog/${post.slug}`} />
        <meta property="og:title" content={`${post.title} | ZFIT Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://zfit.in/blog/${post.slug}`} />
        <meta property="og:image" content={post.image} />
      </Helmet>
      <div className="container">
        <Link
          to="/blog"
          className="btn btn-secondary"
          style={{ marginBottom: '1rem' }}
        >
          Back to Blog
        </Link>
        <header className="blog-post-header">
          <h1 className="section-title" style={{ textAlign: 'left' }}>
            {post.title}
          </h1>
          <div className="blog-meta">
            <span className="blog-category">{post.category}</span>
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <div className="blog-hero">
            <img src={post.image} alt={post.title} />
          </div>
        </header>

        <div className="blog-post-content">{post.content.map(renderBlock)}</div>
      </div>
    </article>
  );
};

export default BlogPostPage;
