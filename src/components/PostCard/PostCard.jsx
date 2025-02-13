import {Link} from "react-router-dom";
import './postcard.css'


export default function PostCard({post}){
    return (
        <Link to={`/posts/${post.id}`} className={'post-card'}>
            <div className="card text-center bg-dark rounded text-white cardHover" >
                <div className="card-body">
                    <h5 className="card-title fw-bold" >
                        {post.title}
                    </h5>
                    <p className="card-text">
                        {post.description}
                    </p>
                </div>
                <div className="card-footer opacity-50 font-monospace">
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