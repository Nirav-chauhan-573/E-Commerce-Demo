import React from "react";
import { Redirect, Route } from 'react-router-dom';


const Protected = ({ path, match, component: Cmp, ...rest }: any) => {
    let uname: any = localStorage.getItem('IsAdmin')
    let unameParse: any = JSON.parse(uname)
 
    return (
        <Route
            {...rest}
            render={(props) => {
                if (unameParse === "User") {
                    return <Cmp{...rest}{...props} />
                }
                else {
                    return <Redirect to='/' />

                }
            }
            }


        />
    )
}
export default Protected