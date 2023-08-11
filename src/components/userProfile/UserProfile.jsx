import './userProfile.css'

const Profile = () => {
  return (

    <div className="profileConatiner">
      <div className="profileWrapper">
        <div className="profileTop">
          <img className="profileCoverImage" src="https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="CoverPhoto" />
          <span className="profileImg">
            <img src="https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="ProfileImage" />
          </span>
          <p className="profileName">Prabhat kumar  </p>
          <p className="profileDetails">Hii EveryOne  </p>
        </div>
      </div>
    </div>

  )
}

export default Profile