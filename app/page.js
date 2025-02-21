import posts from '../lib/posts'
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import PostCard from '@/components/PostCard';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main className={"min-h-screen w-[99.1vw] flex flex-col justify-between"}>
      <NavBar />
      <div className={"w-[75vw] max-w-3xl self-center flex flex-col gap-[3vh] mx-[4vh] break-words max-xl:mx-[3vh] max-sm:mx-[5vh]"}>
        <div className="align-self-center  text-center">
            <h1 className={"mb-[2vh] font-bold text-4xl max-sm:text-2xl"}>Welcome to My Blog</h1>
            <h5 className={"text-2xl max-sm:text-lg"}>Sharing thoughts on tech, coding, and open source.</h5>
        </div>
        <h2 className={"mb-0 pb-0 text-xl"}>Recent Posts</h2>
        {posts.map((post) => (
            <PostCard post={post} key={post.id} /> 
        ))}
      </div>
      <ScrollToTop />
      <Footer />
    </main>
  );
}
