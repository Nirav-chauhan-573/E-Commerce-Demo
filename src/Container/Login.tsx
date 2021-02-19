import React, { useState } from 'react';
import HomeNavbar from '../Container/Front/HomeNavbar';
import { Redirect } from "react-router-dom";
import swal from 'sweetalert';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const Login = (props: any) => {

    const [user, setuser] = useState({
        fanme: "",
        pass: ""
    });
    const obj = {
        uname: "admin",
        pass: "admin",
    };
    localStorage.setItem("AdminLogin", JSON.stringify(obj));

    const getAdminUser: any = localStorage.getItem("AdminLogin");
    const adminUser = JSON.parse(getAdminUser)

    const [Auth, setAuth] = useState(false);
    const [Admin, setAdmin] = useState(false);

    let isAuth: any = false;
    let isAdmin: any = false;
    console.log(adminUser)
    // console.log(isAuth, "f")
    // console.log(isAdmin, "f")


    let oldItemsparse: any = [];
    if (oldItemsparse === null) {
        oldItemsparse = [];
        localStorage.setItem("user", JSON.stringify(oldItemsparse))
    }

    let getold: any = localStorage.getItem('user')
    oldItemsparse = JSON.parse(getold)
    // console.log(oldItemsparse)

    const onchangeeve = (e: any) => {
        // setuser({ ...user, [e.target.name]: e.target.value })
        setuser(state => ({
            // setuser: {
            ...state,
            [e.target.name]: e.target.value,
            // },
        }));
        // isauthfn()
    };
    const responseGoogle = (response: any) => {
        console.log(response.profileObj.email)
        let email: any = response.profileObj.email;

        if (response) {
            localStorage.setItem("UserName", JSON.stringify(email));
            localStorage.setItem("IsAdmin", JSON.stringify("User"));
            isAuth = true;
            check()

            console.log("autg");
            // return <Redirect to='/Product' />

        }
    }
    const responseFacebook = (response: any) => {
        console.log(response.email)
        let email: any = response.email;

        if (response) {
            localStorage.setItem("UserName", JSON.stringify(email));
            localStorage.setItem("IsAdmin", JSON.stringify("User"));
            isAuth = true;
            check()

            console.log("autg");
            // return <Redirect to='/Product' />

        }
    }
    const isauthfn = () => {
        // console.log(user.fanme);
        // console.log(user.pass);

        oldItemsparse && oldItemsparse.map((object: any, i: any) => {
            // console.log(object.fname)
            if (object.fname === user.fanme && object.Password === user.pass) {
                isAuth = true
                localStorage.setItem("UserName", JSON.stringify(user.fanme));
                localStorage.setItem("IsAdmin", JSON.stringify("User"));
                // console.log(isAuth)
            } else if (obj.uname === user.fanme && obj.pass === user.pass) {
                isAdmin = true
                localStorage.setItem("UserName", JSON.stringify(user.fanme));
                localStorage.setItem("IsAdmin", JSON.stringify("Admin"));
                // console.log(isAdmin)

            }
            // else {
            //     console.log("wrong");
            //     swal({
            //         title: "User Name And Password Not Match!",
            //         text: "Check !",
            //         icon: "warning",
            //     })
            // }

            return null;

        })

    }
    const check = () => {

        if (isAdmin === true) {
            setAdmin(true)
            // console.log(isAdmin, "check")
        }
        else if (isAuth === true) {
            console.log(isAuth, "check")
            setAuth(true)
        }
        else {
            swal({
                title: "User Name And Password Not Match!",
                text: "Check !",
                icon: "warning",
            })
            // console.log(isAdmin, "check")
            // console.log(isAuth, "check")
            // console.log("NOt Work")
        }

    }
    // !localStorage.getItem('token') ? <Redirect from='/' to='/login' /> : ''
    if (localStorage.getItem('UserName')) {
        return <Redirect to='/Product' />
    }
    // console.log(isAuth)
    // console.log(isAdmin)

    if (Auth === true) {
        return (
            <Redirect to="/Product" />
        )
    } else if (Admin === true) {
        return (
            <Redirect to="/AdminHome" />
        )
    }
    return (
        <>
            <HomeNavbar />

            <div className="ta " >
                <br /><br /><br />
                <h1>
                    Enter User Name And Password<br />    </h1>


                <input placeholder="First Name"
                    onChange={e => onchangeeve(e)}
                    name="fanme"
                ></input><br /><br />
                <input placeholder="Password" type="password"
                    onChange={e => onchangeeve(e)}
                    name="pass"
                ></input><br /><br />
                <button onClick={() => {
                    isauthfn()
                    check()
                }} >Login </button>
                <br />                <br />


                <GoogleLogin
                    clientId="753106138620-a25i8frjvhrboq1m2aoa14c6jggeokei.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <br />
                <FacebookLogin
                    appId="752076952100456"
                    // autoLoad={true}
                    fields="name,email,picture"
                    // onClick={componentClicked}
                    callback={responseFacebook}
                />

            </div>
        </>

    )
}
export default Login;