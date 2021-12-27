import { PostCard, Categories, PostWidget, Author } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto lg:px-10 px-1 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <Author author={posts[0].node.author} />

          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1 mt-12">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
