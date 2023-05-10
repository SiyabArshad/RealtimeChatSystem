import React, { useEffect } from "react";
import http from "../../utils/http";
import Drawer from "../Drawer/Drawer";
const Profile = () => {
    useEffect(() => {
        getUserProfile();
    }, []);
    const getUserProfile = async () => {
        const response = await http.get("/user");
        console.log(response);
    };
    return (
        <>
        <Drawer/>
        <div style={{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h1>This is Profile Component</h1>
        </div>
        </>
    );
};

export default Profile;
