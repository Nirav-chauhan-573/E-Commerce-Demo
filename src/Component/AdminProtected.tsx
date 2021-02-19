import React from "react";
import { Redirect, Route } from 'react-router-dom';

// let Cmp: any;

const AdminProtected = ({ path, match,component: Cmp, ...rest }: any) => {
    let uname: any = localStorage.getItem('IsAdmin')
    let unameParse: any = JSON.parse(uname)
    console.log(unameParse==="Admin")
    console.log(rest.path)
    // console.log(Cmp)
    
    // console.log(props)
    return (
        <Route
            {...rest}
           render={(props) => {
               console.log(props.location.pathname)
                if (unameParse==="Admin") {   
                    return <Cmp{...rest}{...props} />
                    // return <Redirect to={props.location.pathname} />
                }
                else {
                    return <Redirect to='/' />

                }
            }
            }


        />
    )
}
export default AdminProtected