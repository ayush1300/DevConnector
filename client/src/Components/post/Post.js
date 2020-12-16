import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { getPost } from "../../actions/post"
import Spinner from "../Layout/spinner"
import PostItem from "../posts/PostItem"
import CommentForm from "../post/CommentForm"
import CommentItem from "../post/CommentItem"
import {Link} from "react-router-dom"
const Post = ({getPost, post: {post,loading}, match}) => {

    useEffect(()=> {
        getPost(match.params.id);        
    },[getPost])

    return (
        <div>
            {loading || post==null ? <Spinner/> : 
            <Fragment> 
                <Link to="/posts" className="btn">Back To Posts</Link>
                <PostItem post={post} showActions={false} />  
                <CommentForm postId={post._id} /> 
                {post.comment.map(comment => (
                    <CommentItem  postId={post._id}  comment={comment}  />
                ))}
            </Fragment> 
            }
            
        </div>
    )
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps,{getPost})(Post)
