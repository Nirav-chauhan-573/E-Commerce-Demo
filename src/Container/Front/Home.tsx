import React from 'react';
import FrontNav from '../../Container/Front/HomeNavbar'
import FrontTabs from '../Front/Tabs';
import { Redirect } from "react-router-dom";



const FrontHome = () => {
    let uname: any = localStorage.getItem('IsAdmin')
    let unameParse: any = JSON.parse(uname)
    console.log(unameParse)

    if (unameParse==="User") {
        return <Redirect to='/Product' />
    }
    else if(unameParse==="Admin") {
        return <Redirect to='/AdminHome' />
            }
    return (
        <>
            <FrontNav />
            <h2 className="ta" style={{ paddingTop: "60px" }}>We Are</h2>
            <h1 className="ta">Your Online Order  & Purchase Partner</h1>
            <p className="ta">Industry 4.0 has its own advantage with it's criticalities and among of them cyber security is crucial part to manage, but dont worry we are here for that.</p>
            <br /><br />
            <FrontTabs />
            {/* <img src="download.jpeg" className="tabs" style={{height:"500px", width:"500px", alignContent:"left"}}/> */}
            <br />
            <br />
            <br />
            <br />

            <h5 className="ta">Contact Us :</h5><br />
            <h5>PHONE : +91 909-909-40100</h5><br />
            <h5>EMAIL :
contact@labs.in</h5><br />
            <h5> ADDRESS :
            407 Shivam-1 Amba Business Park, Adalaj, Gandhinagar, Gujarat 382421

</h5>
        </>
    )
}
export default FrontHome;