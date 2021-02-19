import React from 'react';
import ProductNav from './ProductNavbar';



const Lastpage = () => {
    let getCartData: any = [];
    let parseCartDta: any = [];
    let getUserParse: any = localStorage.getItem("UserName");
    let getUser: any = JSON.parse(getUserParse)
    parseCartDta = localStorage.getItem('Cart');
    getCartData = JSON.parse(parseCartDta);
    // getCartData = [];
    let filterData = getCartData.filter((val: any) => {
        if (val.userName !== getUser) {
            return val;
        }
        return null;
    })
    localStorage.setItem("Cart", JSON.stringify(filterData));

    return (
        <>
            <ProductNav />
            <h1>Thank you</h1>
        </>
    )
}
export default Lastpage;