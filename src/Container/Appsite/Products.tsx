import React, { useState } from "react";
import { Card, ListGroup, ListGroupItem, Form } from "react-bootstrap";
import ProductNav from "../Appsite/ProductNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { HiShoppingCart } from 'react-icons/hi';
import { FaStar } from 'react-icons/fa';






const Cardcmp = () => {
  let oldProduct: any = [];
  let getoldstar: any = localStorage.getItem('Product')
  oldProduct = JSON.parse(getoldstar)

  const [search, setsearch] = useState("");
  const [getProduct, SetProduct] = useState("");
  // const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [display, setdisplay] = useState(true);


  // let saveRating :any;


  console.log(getProduct)
  console.log(hover)
  console.log(display)

  let oldimg: any = [];
  let category: any = [];
  let cart: any = [];

  let userNameParse: any = localStorage.getItem("UserName");
  let userName = JSON.parse(userNameParse);

  let oldCategory: any = localStorage.getItem('categorys');
  category = JSON.parse(oldCategory)

  let getold: any = localStorage.getItem('Product')
  oldimg = JSON.parse(getold)

  const oldDataParse: any = localStorage.getItem('Order');
  let order: any = JSON.parse(oldDataParse);

  // const oldRevireParse: any = localStorage.getItem('Review');
  // let review: any = JSON.parse(oldRevireParse);

  // if (review === null) {
  //   review = [];
  //   localStorage.setItem("Review", JSON.stringify(review))
  // }
  if (order === null) {
    order = [];
    localStorage.setItem("Order", JSON.stringify(order))
  }
  return (
    <>
      <ProductNav />
      <br />
      <div>
        <input type="text" placeholder="Search..." onChange={(e) => {
          setsearch(e.target.value);
        }} />
      </div>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom" style={{ width: "200px" }} className="tabs">
          <Form.Label className="tabs">Filter By </Form.Label>
          {/* <h4>Filter By</h4> */}
          <Form.Control as="select" custom placeholder="Filter" onChange={(e) => {
            setsearch(e.target.value)
          }} >
            {category && category.map((data: any, i: any) => {
              return (

                <option key={i}>{data}</option>
              )
            }
            )}
          </Form.Control>
        </Form.Group>
      </Form>
      {oldimg && oldimg.filter((val: any) => {
        if (search === "") {
          return val
        }
        else if (val.pname.toLowerCase().includes(search.toLocaleLowerCase())) {
          return val;
        } else if (val.Desp.toLowerCase().includes(search.toLocaleLowerCase())) {
          return val;
        } else if (val.Salers.toLowerCase().includes(search.toLocaleLowerCase())) {
          return val;
        } else if (val.Category.toLowerCase().includes(search.toLocaleLowerCase())) {
          return val;
        }
        return null;

      })
        .map((object: any, i: any) => {


          return (
            <>

              <div className="div" key={i + 1}>

                <Card className="Cardstyle" >
                  <Card.Img
                    variant="top"
                    src={object.imgSrc}
                    style={{ width: "100%", height: "200px" }}
                  />
                  <Card.Body>
                    <Card.Title> Salers : {object.Salers}</Card.Title>
                    <Card.Text>Product Description : {object.Desp}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Price: {object.Price}</ListGroupItem>
                    <ListGroupItem>Available : {object.Available}</ListGroupItem>

                  </ListGroup>
                  <Card.Body>
                    {/* <button className="ml" > */}
                      <HiShoppingCart color="blue" size={50} style={{ display: oldProduct[i].Available ? "inline-block" : "none", padding: "10px" }}
                        onClick={() => {
                          const oldcartParse: any = [localStorage.getItem('Cart')];
                          const oldCart = JSON.parse(oldcartParse)
                          // console.log(oldCart)
                          cart = oldCart;
                          oldimg[i].userName = userName;
                          console.log(oldimg[i])

                          cart.push(oldimg[i])
                          // order = oldOrder;                    
                          // order.push(oldimg[i])
                          // localStorage.setItem("Product", JSON.stringify(oldimg));

                          console.log(cart)
                          localStorage.setItem("Cart", JSON.stringify(cart));


                          order.push(oldimg[i])
                          localStorage.setItem("Order", JSON.stringify(order))
                          const dec: number = parseInt(object.Available);
                          let sub: number = dec - 1
                          let newItem: any = { ...oldimg[i], Available: sub }
                          console.log(newItem)
                          console.log(oldimg[i])
                          oldimg[i] = newItem;
                          console.log(oldimg[i])
                          console.log(oldimg)
                          localStorage.setItem("Product", JSON.stringify(oldimg))
                          SetProduct(oldimg);
                          if (sub <= 0) {
                            setdisplay(false)
                            sub = 0;
                            let newItem: any = { ...oldimg[i], Available: sub }
                            oldimg[i] = newItem;
                            localStorage.setItem("Product", JSON.stringify(oldimg))
                            SetProduct(oldimg);
                          }

                        }} 
                      />
                    {/* </button > */}
                    <Link to="ViewProduct">Details</Link>
                    <br />
                    {

                      [...Array(5)].map((star, is) => {
                        const ratingvalue: number = is + 1;
                        return (
                          <>
                            <div className="div" key={is + 2}>
                              <label className="star" >
                                <input type="radio"
                                  name="rating"
                                  value={ratingvalue}
                                  key={is}
                                  className="radio"
                                  onClick={() => {
                                    // setRating(ratingvalue);
                                    // saveRating=ratingvalue;
                                    oldProduct[i].Review = ratingvalue;
                                    // console.log(oldProduct[i].Review)
                                    localStorage.setItem("Product", JSON.stringify(oldProduct));
                                  }}

                                />
                                < FaStar
                                  key={is + 1}
                                  color={ratingvalue <= (oldProduct[i].Review) ? "#ffc107" : "#e4e5e9"}
                                  size={30}
                                  onMouseEnter={(() => {
                                    setHover(ratingvalue)
                                  })}
                                  onMouseLeave={(() => setHover(0))}

                                />

                              </label>
                            </div>
                          </>)
                      })
                    }
                    {<h6>{oldProduct[i].Review}</h6>}
                  </Card.Body>

                </Card>
              </div>
            </>)
        })}
    </>
  );
};
export default Cardcmp;
