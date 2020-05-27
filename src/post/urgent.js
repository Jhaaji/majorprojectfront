import React, { Component } from "react";
import { list } from "./apiPost";
import DefaultPost from "../images/mountains.jpg";
import { Link } from "react-router-dom";

class Urgent extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            page: 1
        };
    }

    loadPosts = page => {
        list(page).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ posts: data });
            }
        });
    };

    componentDidMount() {
        this.loadPosts(this.state.page);
    }

    loadMore = number => {
        this.setState({ page: this.state.page + number });
        this.loadPosts(this.state.page + number);
    };

    loadLess = number => {
        this.setState({ page: this.state.page - number });
        this.loadPosts(this.state.page - number);
    };

    renderPosts = posts => {
        return (
            <div className="row">
                {posts.map((post, i) => {
                    const posterId = post.postedBy
                        ? `/user/${post.postedBy._id}`
                        : "";
                        const j=0;
                    const posterName = post.postedBy
                        ? post.postedBy.name
                        : " Unknown";
                        if(post.area=='Tumkur'||post.area=='Bengaluru'){
                    return (
                        
                        <div className="col-md-4" key={i}>
                            <div className="card-body">
                                <img
                                    src={`${
                                        process.env.REACT_APP_API_URL
                                    }/post/photo/${post._id}`}
                                    alt={post.title}
                                    onError={i =>
                                        (i.target.src = `${DefaultPost}`)
                                    }
                                    className="img-thunbnail mb-5"
                                    style={{ height: "200px", width: "100%" }}
                                />
                               
                                <h5 className="card-title">{post.title}</h5>
                                 Category :
                                  <span 
                                        className="danger"
                                        style={{
                                            backgroundColor: 'lightcyan'
                                          }}
                                    >
                                        {post.category}
                                    </span><br />
                                     Area :
                                  <span 
                                        className="danger"
                                        style={{
                                            backgroundColor: 'lightcyan'
                                          }}
                                    >
                                        {post.area}
                                    </span>
                                    <br /><br /> 
                                <p className="card-text">
                                    {post.body.substring(0, 100)}
                                </p>
                                
                                <p className="font-italic mark">
                                    Raised by{" "}
                                    <Link to={`${posterId}`}>
                                        {posterName}{" "}
                                    </Link>
                                    on {new Date(post.created).toDateString()}
                                </p>
                                <Link
                                    to={`/post/${post._id}`}
                                    className="btn btn-raised btn-primary btn-sm"
                                >
                                    Read more
                                </Link>
                            </div>
                        </div>

                    );
                    }
                })}
            </div>
        );
    };

    render() {
        const { posts, page } = this.state;
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">
                    {!posts.length ? "No more complaints!" : "Urgent Complaints"}
                </h2>

                {this.renderPosts(posts)}

                {page > 1 ? (
                    <button
                        className="btn btn-raised btn-warning mr-5 mt-5 mb-5"
                        onClick={() => this.loadLess(1)}
                    >
                        Previous ({this.state.page - 1})
                    </button>
                ) : (
                    ""
                )}

                
            </div>
        );
    }
}

export default Urgent;