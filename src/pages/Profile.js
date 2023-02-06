import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = getAuth(); // get user from firebase

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();

    navigate("/");
  };

  return (
    <div className="profile">
      <header className="profieHeader">
        <p className="pageHeader">My Profile</p>
        <button className="logOut" type="button" onClick={handleLogout}>
          Logout
        </button>
      </header>
    </div>
  );
};
export default Profile;
