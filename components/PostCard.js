import Link from "next/link";


export default function PostCard({post}){
    return (
        <Link href={"/"} className={"hover:no-underline text-white hover:text-white"}>
            <div className="card flex flex-col justify-between gap-[1vh] px-[2vh] py-[3vh] text-center bg-[#212529] rounded-lg shadow-[5px_5px_10px_2px_#7f7f7f,inset_-5px_-4px_15px_3px_#3c3a3a] transition-all duration-300 hover:shadow-[10px_10px_15px_2px_#a4a4a4] hover:-translate-x-1.5 hover:-translate-y-1.5 " >
                <div className="card-body">
                    <h5 className="font-bold pb-[1vh] text-xl">
                        {post.title}
                    </h5>
                    <p className="card-text max-w-[85%] justify-self-center">
                        {post.description}
                    </p>
                </div>
                <div className="opacity-50 font-mono text-sm">
                    Posted on {post.dateCreated}
                </div>
            </div>
        </Link>
    )
}

PostCard.propTypes = {
    post: ({
        id: String,
        title: String,
        description: String,
        date: String,
    })
};