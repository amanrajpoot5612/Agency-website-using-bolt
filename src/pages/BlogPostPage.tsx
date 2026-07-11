import { useParams, Link } from 'react-router-dom';
import PageLayout from '../Layout/PageLayout';
import ReactMarkdown from 'react-markdown';
import data from '../Data/Data.json';
import { Seo } from '../components/Seo';
import type { BlogPost } from '../types/content';

export default function BlogPostPage() {
  const { slug } = useParams();
  const posts = data.blogPosts as BlogPost[];
  const post = slug ? posts.find((entry) => entry.slug === slug) : undefined;

  if (!post) {
    return (
      <PageLayout>
        <Seo title="Post Not Found" description="The requested Wired Creations article is unavailable." path={`/blog/${slug || ''}`} noindex />
        <div className="mx-auto max-w-4xl px-4 py-28 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Post not found</h1>
          <p className="mt-4 text-slate-300">The article you are looking for is unavailable. Explore our blog index instead.</p>
          <Link to="/blog" className="mt-8 inline-flex rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-navy-950 transition hover:bg-cyan-300">
            Back to Blog
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <Seo title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} type="article" />
      <article className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-full bg-cyan-500/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-cyan-300">{post.category}</div>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">{post.title}</h1>
        <p className="mt-3 text-slate-400">{post.date}</p>
        <div className="mt-12 rounded-3xl border border-cyan-400/10 bg-navy-950/70 p-8 text-slate-300">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
        <div className="mt-10">
          <Link to="/blog" className="text-cyan-400 transition hover:text-white">← Back to all posts</Link>
        </div>
      </article>
    </PageLayout>
  );
}
