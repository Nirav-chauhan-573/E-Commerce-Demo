import React, { useState } from 'react';
import AdminNav from "./AdminNavbar";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { MdDelete } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import { useFormik } from 'formik';
import * as Yup from "yup";

// import ImageUploader from 'react-images-upload';




const Addproduct = () => {
  const [id, setid] = useState("");
  const [search, setsearch] = useState("")
  const [getProduct, setProduct] = useState("");
  const [display, setdisplay] = useState(false);
  const [userdelete, setDelete] = useState(false);
  const [update, setUpdate] = useState(false);

  let oldProduct: any = [];
  let getoldPro: any = localStorage.getItem('Product')
  oldProduct = JSON.parse(getoldPro);

  let newItem: any = [];
  let myData: any = [];
  let olddata: any = localStorage.getItem('categorys');
  myData = JSON.parse(olddata);

  let getold: any = localStorage.getItem('Product')
  oldProduct = JSON.parse(getold)

  console.log(getProduct)
  console.log(userdelete)
  console.log(update)
  if (oldProduct === null) {
    oldProduct = [];
    localStorage.setItem("Product", JSON.stringify(oldProduct));
  } if (myData === null) {
    myData = [];
    localStorage.setItem("categorys", JSON.stringify(myData));
  }
  const regex = /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;

  const save = (e: any) => {
    e.stopPropagation();
    setdisplay(false)
    newItem = { ...formik.values, [e.target.name]: e.target.value }
    console.log(id)
    oldProduct[id] = newItem;
    console.log(newItem)
    console.log(oldProduct[id])
    localStorage.setItem("Product", JSON.stringify(oldProduct));
    formik.values.pname = ""
    formik.values.Desp = ""
    formik.values.Price = ""
    formik.values.Salers = ""
    formik.values.Available = ""
    formik.values.imgSrc = ""
    formik.values.Category = ""
  }

  const formik: any = useFormik({
    initialValues: {
      pname: "",
      Desp: "",
      Price: 0,
      Salers: "",
      Available: 0,
      imgSrc: "",
      Category: "",
      Review: [],
    },
    validationSchema: Yup.object({
      pname: Yup.string()
        .min(2, "Mininum 2 characters")
        .required("Required!"),
      Desp: Yup.string()
        .min(2, "Mininum 2 characters")
        .required("Required!"),
      Price: Yup.string()
        .required("Required!")
        .matches(regex, 'Price is not valid'),
      Salers: Yup.string()
        .min(2, "Mininum 2 characters")
        .required("Required!"),
      Available: Yup.string()
        .matches(regex, 'Quantity  is not valid')
        .required("Required!"),
      imgSrc: Yup.string()
        .min(2, "Mininum 2 characters")
        .required("Required!"),
      Category: Yup.string()
        .min(2, "Mininum 2 characters")
        .required("Required!")
    }),
    onSubmit: values => {

      oldProduct.push(formik.values);
      localStorage.setItem("Product", JSON.stringify(oldProduct));
      setProduct(oldProduct)
      console.log("oldProduct");
      setUpdate(true);
      setdisplay(false);
      setDelete(false);
      formik.values.pname = ""
      formik.values.Desp = ""
      formik.values.Price = ""
      formik.values.Salers = ""
      formik.values.Available = ""
      formik.values.imgSrc = ""
      formik.values.Category = ""
      setUpdate(false)


      // oldItemsparse.push(formik.values)
      // localStorage.setItem("user", JSON.stringify(oldItemsparse));
      // SetUserData(oldItemsparse)

    }

  })
  const cancle = () => {
    setdisplay(false);
    // console.log("cancle batn ")

    formik.values.pname = ""
    formik.values.Desp = ""
    formik.values.Price = ""
    formik.values.Salers = ""
    formik.values.Available = ""
    formik.values.imgSrc = ""
    formik.values.Category = ""
  }
  // console.log(getold)

  // const onchangeeve = (e: any) => {
  //   formik
  //   ({ ...formik, [e.target.name]: e.target.value })
  //   console.log(formik)
  //   setProduct(oldProduct)
  // }

  // const onsubmit = (e: any) => {
  //   console.log("submit")
  //   setProduct(oldProduct)
  //   e.preventDefault()
  //   oldProduct.push(formik);    
  //   localStorage.setItem("Product", JSON.stringify(oldProduct));
  // }
  // const imgupload = (e: any) => {
  //   console.log(e.target.files[0].name)
  //   newItem = { ...formik.values, imgSrc: e.target.files[0].name }
  //   console.log(newItem)
  //   // console.log(formik.values.imgSrc.e.target.files[0].name)
  // }

  // if (localStorage.getItem('UserName')) {
  //   console.log("autg")
  //   return <Redirect to='/Product' />
  // }
  return (
    <>
      <AdminNav />
      <br />
      <div>
        <input type="text" placeholder="Search..." onChange={(e) => {
          setsearch(e.target.value);
        }} />
      </div>
      <br />

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Salers</th>
            <th>Quantity</th>
            <th>EDIT</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>

          {
            oldProduct.filter(function (val: any) {
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

                  <tr key={i}
                    onClick={() => {
                      setid(i);
                      return id;
                    }}>
                    <td>{i + 1}</td>
                    <td>{object.pname}</td>
                    <td>{object.Desp}</td>
                    <td>{object.Price}</td>
                    <td>{object.Salers}</td>
                    <td>{object.Available}</td>

                    <td><AiOutlineEdit onClick={() => {
                      setdisplay(true)
                      setDelete(false)
                      setUpdate(false)
                      formik.values.pname = oldProduct[i].pname
                      formik.values.Desp = oldProduct[i].Desp
                      formik.values.Price = oldProduct[i].Price
                      formik.values.Salers = oldProduct[i].Salers
                      formik.values.Available = oldProduct[i].Available
                      formik.values.imgSrc = oldProduct[i].imgSrc

                      setDelete(false)

                    }}> </AiOutlineEdit></td>

                    <td><MdDelete onClick={() => {
                      console.log(oldProduct)
                      oldProduct.splice(i, 1)
                      localStorage.setItem("Product", JSON.stringify(oldProduct));
                      setDelete(true)
                      setdisplay(false)
                      setUpdate(false)
                      formik.values.pname = ""
                      formik.values.Desp = ""
                      formik.values.Price = ""
                      formik.values.Salers = ""
                      formik.values.Available = ""
                      formik.values.imgSrc = ""
                      formik.values.Category = ""
                      // setDelete(false)
                    }}>  </MdDelete></td>
                  </tr>

                );
              })

          }
        </tbody>
      </Table>
      <br />
      {/* <form onSubmit={formik.handleSubmit}> */}
      <table>
        <tbody>
          <tr>
            <td> Product Name</td>
            <td>
              <input placeholder="Product Name"
                onChange={formik.handleChange}
                name="pname"
                value={formik.values.pname} ></input>
            </td>
            {formik.errors.pname && formik.touched.pname && (
              <p>{formik.errors.pname}</p>
            )}
          </tr>
          <tr>
            <td> Description</td>
            <td>
              <input placeholder="Description"
                onChange={formik.handleChange}
                name="Desp"
                value={formik.values.Desp}></input>
            </td>
            {formik.errors.Desp && formik.touched.Desp && (
              <p>{formik.errors.Desp}</p>
            )}
          </tr>
          <tr>
            <td> Price</td>
            <td>
              <input placeholder="Price"
                onChange={formik.handleChange}
                name="Price"
                value={formik.values.Price}></input>
            </td>
            {formik.errors.Price && formik.touched.Price && (
              <p>{formik.errors.Price}</p>
            )}
          </tr>
          <tr>
            <td> Salers Name</td>
            <td>
              <input placeholder="Salers"
                onChange={formik.handleChange}
                name="Salers"

                value={formik.values.Salers}></input>
            </td>
            {formik.errors.Salers && formik.touched.Salers && (
              <p>{formik.errors.Salers}</p>
            )}
          </tr>
          <tr>
            <td> Quantity </td>
            <td>
              <input placeholder="Quantity"
                onChange={formik.handleChange}
                name="Available"
                value={formik.values.Available}></input>
            </td>
            {formik.errors.Available && formik.touched.Available && (
              <p>{formik.errors.Available}</p>
            )}
          </tr>
          <tr>
            <td> Image Link </td>
            <td>
              <input placeholder="imgSrc"
                onChange={formik.handleChange}
                name="imgSrc"
                value={formik.values.imgSrc}>
              </input>
              {/* <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={imgupload}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            /> */}
              {/* <input type="file"
                  onChange={imgupload}  
                  name="imgSrc"
                  value={formik.values.imgSrc}
                  /> */}
            </td>
            {formik.errors.imgSrc && formik.touched.imgSrc && (
              <p>{formik.errors.imgSrc}</p>
            )}
          </tr>
          <tr>
            <td> Select Category</td>
            <td>
              <Form>
                <Form.Group controlId="exampleForm.SelectCustom" style={{ width: "200px" }}>
                  <Form.Control name="Category" onChange={formik.handleChange} value={formik.Category} as="select" custom>
                    {myData.map((data: any, i: any) => {
                      return (
                        <>
                          <option key={i}>{data}</option>
                        </>
                      )
                    }
                    )}
                  </Form.Control>
                </Form.Group>
              </Form>
            </td>
            {formik.errors.Category && formik.touched.Category && (
              <p>{formik.errors.Category}</p>
            )}
          </tr>
        </tbody>
      </table>
      <button style={{ display: display ? "none" : "block" }} onClick={formik.handleSubmit}>Submit</button>
      <button style={{ display: display ? "inline-block" : "none" }} onClick={save}>Save</button>
      <button style={{ display: display ? "inline-block" : "none" }} onClick={cancle}>Cancle</button>

      {/* </form> */}
      <br />
    </>
  )

}
export default Addproduct;