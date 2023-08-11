import './Rightbar.css'
import { UilGift } from '@iconscout/react-unicons'

const Rightbar = (props) => {
    return (props.data &&
        <div className="rightbarContainer">
            <div className="rightWrapper">
                <div className="birthdayComponent">
                    <UilGift style={{ color: "red", width: "3rem", height: "3rem", marginRight: "0.5rem" }} />
                    <span className="birthdayComponentText"><b>Prabhat</b> and <b>3 Other</b> Have their Birthday Today</span>
                </div>
                <hr className='rightHr' />
                <div className="friendsOnlineComponent">
                    {props.data.map((e) => {
                        return <div className="friendOnline">
                            <div className="friendImgContainer">
                                <img src={e.user.profile_image.small} alt="friend online" className="friendImg" style={{ width: "2rem", height: "2rem" }} />
                                <span className="greenDot"></span>
                            </div>
                            <span className="friendName"> {e.user.first_name? e.user.first_name: "" +""+ e.user.last_name ? e.user.last_name : ""}</span>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Rightbar
