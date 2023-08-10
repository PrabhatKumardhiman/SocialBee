import './Post.css'
import { UilThumbsUp, UilHeart, UilChat, UilEllipsisH, UilTimes } from '@iconscout/react-unicons'

const Post = (props) => {
    const { profileImg, userName, date, caption, img, likes } = props
    return (
        <div className="postContainer">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="topLeft">
                        <img src={profileImg} style={{ width: "2.5rem", height: "2.5rem", objectFit: "cover", borderRadius: "50%" }} alt="" className="postprofileImg" />
                        <span className="postProfileDetails">
                            <a href="/" className="postProfileName" >{userName}</a>
                            <a href="/" className="postDoneOn" >{date}</a>
                        </span>
                    </div>
                    <span className='postTopCross'>
                        <UilEllipsisH />
                        <UilTimes />
                    </span>
                </div>
                <div className="postCenter">
                    <p className="postTitle">{caption}</p>
                    <div className="postImgContainer">
                        <img src={img} alt="" className="postImg" />
                    </div>
                </div>
                <div className="postBottom">
                    <div className="like">
                        <span className="likeIcons">
                            <UilThumbsUp style={{ color: "blue", marginRight: "0.5rem" }} />
                            <UilHeart style={{ color: "red", marginRight: "0.5rem" }} />
                        </span>
                        <span className="likeCounter">{likes} Peoples liked it.</span>
                    </div>
                    <div className="comments">
                        <span className="commentCounter">{(Math.random() * likes).toFixed()}</span>
                        <UilChat className="commentIcon" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Post
