import "../styles/profile.css";

const Profile = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    return (

        <div className="profile">

            <div className="profile-card">

                <h2>{user?.name}</h2>

                <p className="profile-role">
                    CameraShop Customer
                </p>

                <div className="profile-info">

                    <div className="info-box">

                        <h4>Name</h4>

                        <p>{user?.name}</p>

                    </div>

                    <div className="info-box">

                        <h4>Email</h4>

                        <p>{user?.email}</p>

                    </div>

                </div>

                <div className="profile-buttons">

                    <button className="logout-btn">
                        Logout
                    </button>

                </div>

            </div>

        </div>

    );

};

export default Profile;