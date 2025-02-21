import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import posts from '@/lib/posts';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import PostedOn from '@/components/PostedOn';
import UpdatedOnAndTags from '@/components/UpdatedOnAndTags';

async function getPostData(postID) {
  const post = posts.find((p) => p.id === postID);

  if (!post) {
    return null;
  }
  const filePath = path.join(process.cwd(), post.file);
  const content = fs.readFileSync(filePath, 'utf-8');

  return { content, post };
}

export default async function Page({params}) {
  const id = (await params).id;
  const postData = await getPostData(id);

  if (!postData) {
    return <div>Post not found</div>;
  }

  const { content, post } = postData;

  return (
    <>
      <NavBar />
      <div className={"w-[95vw] flex flex-col justify-center"}>
        <div className={"w-[75vw] max-w-3xl self-center flex flex-col gap-[3vh] mx-[4vh] break-words max-xl:mx-[3vh] max-sm:mx-[5vh]"}>
            <PostedOn date={post.dateCreated} />
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
            <UpdatedOnAndTags date={post.dateModified} tags={post.tags.join(", ")} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    postID: post.id,
  }));
}
