// import { useContext } from "react";
// import AuthProvider from "../../providers/AuthProvider";
// import { AuthContext } from "../providers/AuthProvider";
import {useParams } from "react-router-dom";


const UserProfile = () => {
    // const {user} = useContext(AuthProvider);
    const { email } = useParams();
    console.log(email);
       
    return (
        <div>
            {/* {user.email} */}
        </div>
    );
};

export default UserProfile;