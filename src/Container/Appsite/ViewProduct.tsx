import React from 'react';
import ProductNav from "../Appsite/ProductNavbar";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";




const ViewProduct = () => {
    let oldimg: any = [];
    let getold: any = localStorage.getItem('Product')
    oldimg = JSON.parse(getold)
    return (
        <>
            <ProductNav />
            <h2>View Product</h2>
            {oldimg.map((object: any, i: any) => {
                return (
                    <>
                        <Card className="Cardstyle" >
                            <Card.Body>
                                <Card.Title> Salers : {object.Salers}</Card.Title>
                                <Card.Text>Product Description : {object.Desp}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Price: {object.Price}</ListGroupItem>
                                <ListGroupItem>Available : {object.Available}</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </>
                )
            }
            )}
        </>
    )
}
export default ViewProduct;