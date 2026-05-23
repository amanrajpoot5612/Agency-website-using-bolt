import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import PageLayout from '../Layout/PageLayout';
import data from '../Data/Data.json';

const posts = data.blogPosts || [];

export default function BlogPage() {
  return (
    <PageLayout>
      <section className="bg-navy-950 pb-20">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">Blog</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">Insights from the build.</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">Design, development, and agency lessons that help you move faster and launch stronger.</p>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {posts.map((post: any) => (
              <article key={post.slug} className="rounded-[2rem] border border-cyan-400/10 bg-navy-950/70 p-8 transition hover:-translate-y-1 hover:border-cyan-400/20">
                <span className="text-xs uppercase tracking-[0.32em] text-cyan-300">{post.category}</span>
                <h2 className="mt-4 text-2xl font-semibold text-white">{post.title}</h2>
                <p className="mt-4 text-slate-400">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                  <span>{post.date}</span>
                  <Link to={`/blog/${post.slug}`} className="text-cyan-400 transition hover:text-white">
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}
