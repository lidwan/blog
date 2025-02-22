import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import posts from '@/lib/posts';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import PostedOn from '@/components/PostedOn';
import UpdatedOnAndTags from '@/components/UpdatedOnAndTags';
import ScrollToTop from '@/components/ScrollToTop';
import NotFound from '@/components/NotFound';

async function getPostData(postID) {
    const post = posts.find((p) => p.id === postID);

    if (!post) {
        return null;
    }
    const filePath = path.join(process.cwd(), "public", post.file);
    const content = fs.readFileSync(filePath, 'utf-8');

    return { content, post };
}

export default async function Page({ params }) {
    const id = (await params).id;
    const postData = await getPostData(id);

    if (!postData) {
        return <NotFound />;
    }

    const { content, post } = postData;

    return (
        <>
            <NavBar />
            <div className={"w-[99.1vw] flex flex-col justify-center"}>
                <article className={"w-[75vw] max-w-3xl self-center flex flex-col gap-[3vh] mx-[4vh] break-words max-xl:mx-[3vh] max-sm:mx-[5vh]"}>
                    <PostedOn date={post.dateCreated} />
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
                    <UpdatedOnAndTags date={post.dateModified} tags={post.tags.join(", ")} />
                </article>
            </div>
            <ScrollToTop />
            <Footer />
        </>
    );
}

export async function generateMetadata({ params }) {
    const id = (await params).id
    const postData = await getPostData(id);

    if (postData) {
        const { post } = postData;
    
        return { 
            title: post.title + " | Loay's Blog", 
            description: post.description, 
            openGraph: { 
                title: post.title,
                siteName: "Loay's Blog",
                description: post.description, 
                type: 'article', 
                publishedTime: post.dateCreated,
                authors: "Loay Idwan",
                url: `/posts/${post.id}`,
                images: [
                    {
                      url: post.picutre,
                      width: 1200,
                      height: 630,
                      alt: "Picture of blog post about" + post.description,
                    }
                ],
            },
            twitter: {
                card: 'summary_large_image',
                title: post.title,
                description: post.description,
                siteName: "Loay's Blog",
                url: `/posts/${post.id}`,
            },
            keywords: post.tags,
            canonical: `/posts/${post.id}`
        }
    }
}


export async function generateStaticParams() {
    return posts.map((post) => ({
        postID: post.id,
    }));
}