import {Link} from "react-router-dom";

export default function PostCard(){
    return (
        <Link to="/">
            <div className="card text-center bg-dark rounded text-white cardHover">
                <div className="card-body">
                    <h5 className="card-title">
                        This is an example post title
                    </h5>
                    <p className="card-text">
                        This is the example post content, qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm<br/>
                        qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm
                    </p>
                </div>
                <div className="card-footer opacity-50 font-monospace">
                    Posted on Jan 3rd, 2025. (Example post date)
                </div>
            </div>
        </Link>
    )
}