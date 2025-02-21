import posts from '../lib/posts'

export default function Home() {
  return (
    <main className={"min-h-screen w-screen flex flex-col justify-between"}>
      {/* <NavBar /> */}
      <div className={" w-[75vw] max-w-3xl self-center flex flex-col gap-[2vw] mx-[4vh] break-words max-xl:[gap-[4vw] mx-[3vh]] max-sm:[gap-[8vw] mx-[5vh]]"}>
        <div className="align-self-center  text-center">
            <h1 className={"mb-[2vh] font-bold text-4xl max-sm:text-2xl"}>Welcome to My Blog</h1>
            <h5 className={"text-2xl max-sm:text-lg"}>Sharing thoughts on tech, coding, and open source.</h5>
        </div>
        <h2 className={"mb-0 pb-0"}>Recent Posts</h2>
        {posts.map((post) => (
            // <PostCard post={post} key={post.id} /> 
            <div>lol</div>
        ))}
      </div>
      
      
  {/* <Footer/> */}
    </main>
  );
}
