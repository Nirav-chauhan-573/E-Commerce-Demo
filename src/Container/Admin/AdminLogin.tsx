import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";



const Login = () => {
    const [isAuth, setAuth] = useState(false);
    const getAdminUser: any = localStorage.getItem("AdminLogin");
    const adminUser = JSON.parse(getAdminUser)
    console.log(adminUser)
    const [oldname, newname] = useState({
        name: "",
        pass: "",
    });
    // console.log(isAuth);
    if (isAuth === true) {
        return (

            <Redirect to="/AdminHome"></Redirect>
        );
    }
    const inputevent = (e: any) => {
        newname({ ...oldname, [e.target.name]: e.target.value })
        console.log(oldname)
    };

    const validate = () => {
        console.log(oldname)
        if (oldname.name === adminUser.uname && oldname.pass === adminUser.pass) {
            console.log("pass")
            setAuth(true);
            <Redirect to="/AdminHome"></Redirect>

            console.log(isAuth)
        } else {
            return;
        }
    };

    // const obj = {
    //     uname: "admin",
    //     pass: "admin",
    // };
    // localStorage.setItem("AdminLogin", JSON.stringify(obj));

    return (
        <>
            {console.log(adminUser.uname)}
            <div className="div">
                <h3 className="h3">Login </h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name "
                    onChange={inputevent}
                />
                <br />
                <br />
                <input
                    type="password"
                    name="pass"
                    placeholder="Enter Your Password "
                    onChange={inputevent}
                />
                <br />
                <br />
                <button onClick={validate} >
                    Submit
        </button>
            </div>
        </>
    );
};
export default Login;
