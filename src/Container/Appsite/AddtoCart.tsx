import React, { useState } from 'react';
import ProductNav from './ProductNavbar';
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { MdDelete } from 'react-icons/md';



const AddToCart = () => {
    const [getCart, SetCart] = useState("");
    let subtotal: any = 0;
    console.log(getCart)

    let getCartdata: any = [];
    let oldProduct: any = [];


    let getUserParse: any = localStorage.getItem("UserName");
    let getUser: any = JSON.parse(getUserParse)
    console.log(getUser)



    getCartdata = localStorage.getItem("Cart")
    let cartParse: any = JSON.parse(getCartdata)
    console.log(cartParse);

    let orderParse: any = localStorage.getItem("Order")
    let order = JSON.parse(orderParse)

    // let order:any=[];
    if (cartParse === null) {
        cartParse = [];
        localStorage.setItem("Cart", JSON.stringify(cartParse))

    } if (order === null) {
        order = [];
        localStorage.setItem("Order", JSON.stringify(order))

    }

    return (
        <>

            <ProductNav />  <h1>Cart</h1>
            { cartParse.filter((val: any) => {
                if (val.userName === getUser) {
                    return val
                }
                return null;

            })
                .map((data: any, i: any) => {
                    let number: any = parseInt(data.Price)
                    console.log(number)
                    subtotal = subtotal + number;
                    return (
                        <div className="div" key={i}>
                            <Card className="Cardstyle">
                                <Card.Img
                                    variant="top"
                                    src={data.imgSrc}
                                    style={{ width: "100%", height: "200px" }}
                                />
                                <Card.Body>
                                    <Card.Title> Salers : {data.Salers}</Card.Title>
                                    <Card.Text>Product Description : {data.Desp}</Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Price: {data.Price}</ListGroupItem>
                                    <ListGroupItem>Available : {data.Available}</ListGroupItem>

                                </ListGroup>
                                <Card.Body>
                                    <Link to="/Lastpage" style={{ padding: "10px" }} onClick={() => {
                                        // order.push(cartParse)
                                        // order=cartParse

                                        console.log(order)
                                        // localStorage.setItem("Order", JSON.stringify(order))

                                    }}>
                                        Continue Shopping
                                 </Link>
                                    <MdDelete onClick={() => {
                                        cartParse.splice(i, 1)
                                        localStorage.setItem("Cart", JSON.stringify(cartParse))
                                        order.splice(i, 1)
                                        localStorage.setItem("Order", JSON.stringify(order))


                                        let getold: any = localStorage.getItem('Product')
                                        oldProduct = JSON.parse(getold)
                                        console.log(oldProduct)

                                        console.log(oldProduct[i].Available)
                                        const dec: number = parseInt(oldProduct[i].Available);
                                        const incr: number = dec + 1
                                        let newItem: any = { ...oldProduct[i], Available: incr }
                                        console.log(newItem)
                                        console.log(oldProduct[i])
                                        oldProduct[i] = newItem;
                                        console.log(oldProduct[i])
                                        console.log(oldProduct)
                                        localStorage.setItem("Product", JSON.stringify(oldProduct))

                                        SetCart(cartParse)

                                    }} />
                                    {/* </MdDelete> */}
                                </Card.Body>
                            </Card>
                        </div>
                    )

                })}
            <div className="div">
                <h3 style={{ display: "block" }}> Subtotal :{subtotal}</h3>
            </div>
        </>

    )
}
export default AddToCart;