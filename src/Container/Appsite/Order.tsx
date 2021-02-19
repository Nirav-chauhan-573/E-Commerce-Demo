import React from 'react';
import ProductNav from './ProductNavbar';
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



const Order = () => {
    let orderParse: any = localStorage.getItem("Order")
    let order = JSON.parse(orderParse)
    console.log(order)

    let getUserParse: any = localStorage.getItem("UserName");
    let getUser: any = JSON.parse(getUserParse)
    console.log(getUser)

    let getProductParse: any = localStorage.getItem("Product");
    let  getProduct: any = JSON.parse(getProductParse)
    console.log(getProduct)


//   const [user, setuser] = useState({})

    // const onchangeeve = (e: any) => {
    //     setuser({ ...getProduct, "Review": e.target.value })
    //     // setProduct(oldProduct)
    //     console.log(user)
    //   }
    if (order === null) {
        order = [];
        localStorage.setItem("Order", JSON.stringify(order))

    }
    return (
        <>

            <ProductNav />
            <h1>Your Orders </h1>

            {
                // order.map((val: any) => {
                // return (
                    order.filter((val: any) => {
                    console.log(val.userName)
                    if (val.userName === getUser) {
                        return val;
                    }
                    return null;
                }).map((data: any, i: any) => {
                    return (
                        <div className="div" key={i}>
                            <Card className="Cardstyle">

                                <Card.Body>
                                    <Card.Title><b> User Name : </b>{data.userName}</Card.Title>
                                    <Card.Text>Product Description : {data.Desp}</Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Price: {data.Price}</ListGroupItem>
                                    <ListGroupItem>Available : {data.Available}</ListGroupItem>

                                </ListGroup>
                                {/* <input type="text" placeholder="REViEW" name= "Review" onChange={onchangeeve}></input> */}
                            </Card>
                        </div>
                    )
                })
                // )
                // })
            }
        </>)
}
export default Order;