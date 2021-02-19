import React, { useState } from "react";
import HomeNavbar from "./HomeNavbar";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { MdDelete } from 'react-icons/md';
import { GrEdit } from 'react-icons/gr';
import { Redirect } from "react-router-dom";



const Registration = () => {

  const [id, setid] = useState("");
  const [display, setdisplay] = useState(false);
  const [getUserData, SetUserData] = useState("");
  const [update, setUpdate] = useState(false);
  const [userdelete, setDelete] = useState(false);


  console.log(update);
  console.log(getUserData);
  console.log(userdelete);

  // console.log(getUserData)
  let oldItemsparse: any = [];
  let newItem: any = [];

  let getold: any = localStorage.getItem('user')
  oldItemsparse = JSON.parse(getold)
  const phoneRegExp: any = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/



  if (oldItemsparse === null) {
    oldItemsparse = [];
    localStorage.setItem("user", JSON.stringify(oldItemsparse));
    const obj = {
      uname: "admin",
      pass: "admin",
    };
    localStorage.setItem("AdminLogin", JSON.stringify(obj));
  }
  // console.log(oldItemsparse)
  const save = (e: any) => {
    // e.stopPropagation();
    setdisplay(false);
    console.log(display, "display")
    newItem = { ...formik.values, [e.target.name]: e.target.value }
    console.log(id + " id")
    // console.log(newItem)
    oldItemsparse[id] = newItem;
    // console.log(oldItemsparse[id])
    // console.log(oldItemsparse)
    localStorage.setItem("user", JSON.stringify(oldItemsparse));

    formik.values.fname = ""
    formik.values.lname = ""
    formik.values.Phone = ""
    formik.values.Email = ""
    formik.values.Address = ""
    formik.values.Password = ""
    formik.values.Confpass = ""
    // setdisplay(true);

  }

  // setUpdate(false)   
  const canclebtn = () => {
    setdisplay(false);
    console.log("cancle batn ")
    // Array.from(document.querySelectorAll("input")).forEach(
    //   input => (input.value = "")
    // );
    formik.values.fname = ""
    formik.values.lname = ""
    formik.values.Phone = ""
    formik.values.Email = ""
    formik.values.Address = ""
    formik.values.Password = ""
    formik.values.Confpass = ""

  }
  const formik: any = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      Phone: "",
      Email: "",
      Address: "",
      Password: "",
      Confpass: "",
    },

    validationSchema: Yup.object({
      fname: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      lname: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      Phone: Yup.string()
        .min(10, "Mininum 10 characters")
        .max(10, "Maximum 10 characters")
        .matches(phoneRegExp, 'Phone number is not valid')
        .required("Required!"),
      Email: Yup.string()
        .email("Invalid email format")
        .required("Required!"),
      Address: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(25, "Maximum 15 characters")
        .required("Required!"),
      Password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
      Confpass: Yup.string()
        .oneOf([Yup.ref("Password")], "Password's not match")
        .required("Required!")
    }),
    onSubmit: values => {
      console.log(update)

      oldItemsparse.push(formik.values)
      localStorage.setItem("user", JSON.stringify(oldItemsparse));
      SetUserData(oldItemsparse)

      // Array.from(document.querySelectorAll("input")).forEach(
      //   input => (input.value = "")
      // );
      // canclebtn();
      formik.values.fname = ""
      formik.values.lname = ""
      formik.values.Phone = ""
      formik.values.Email = ""
      formik.values.Address = ""
      formik.values.Password = ""
      formik.values.Confpass = ""
      setUpdate(true)
      setdisplay(false)
      setDelete(false)
      setUpdate(false)

      // reset();

    }
  })
  // console.log(getUserData)
  // console.log(oldItemsparse)

  // const onsubmit=()=>{
  //   formik.handleSubmit()

  // }
  if (localStorage.getItem('UserName')) {
    console.log("autg")
    return <Redirect to='/Product' />
  }
  return (
    <>
      <HomeNavbar />

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>EDIT</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>



          {
            // {
            // if(oldItemsparse: any) {
            // items.map(item => (
            // <div key={item.id}>{item.title}</div>
            // ))

            oldItemsparse && oldItemsparse.map((object: any, i: any) => {
              return (


                <tr key={i}
                  onClick={() => {
                    setid(i);
                    return id;
                  }}>
                  <td>{object.fname}</td>
                  <td>{object.lname}</td>
                  <td>{object.Email}</td>


                  <td><GrEdit onClick={() => {
                    setdisplay(true)
                    setDelete(false)
                    setUpdate(false)

                    console.log(display, "display  EDIT")
                    formik.values.fname = oldItemsparse[i].fname
                    formik.values.lname = oldItemsparse[i].lname
                    formik.values.Phone = oldItemsparse[i].Phone
                    formik.values.Email = oldItemsparse[i].Email
                    formik.values.Address = oldItemsparse[i].Address
                    formik.values.Password = oldItemsparse[i].Password
                    formik.values.Confpass = oldItemsparse[i].Confpass
                  }}> </GrEdit></td>

                  <td>
                    <MdDelete onClick={() => {
                      setDelete(true)
                      setdisplay(false)
                      console.log(display, "display  EDIT")
                      // console.log(userdelete)
                      // canclebtn();
                      console.log("delete press")
                      // setUpdate(true)
                      oldItemsparse.splice(i, 1)
                      localStorage.setItem("user", JSON.stringify(oldItemsparse));
                      formik.values.fname = ""
                      formik.values.lname = ""
                      formik.values.Phone = ""
                      formik.values.Email = ""
                      formik.values.Address = ""
                      formik.values.Password = ""
                      formik.values.Confpass = ""
                      // setdisplay(false)
                    }}>
                    </MdDelete></td>
                </tr>

              );
            })
            //   }
            // }
          }
        </tbody>
      </Table>
      <table>
        {/* <form onSubmit={formik.handleSubmit}> */}
        <tr>
          <td>Enter Frist Name</td>
          <td>
            <input placeholder="First Name"
              onChange={formik.handleChange}
              name="fname"
              value={formik.values.fname}></input>
          </td>
          {formik.errors.fname && formik.touched.fname && (
            <p>{formik.errors.fname}</p>


          )}
        </tr>
        <tr>
          <td>Enter Last Name</td>
          <td>
            <input placeholder="Last Name"
              onChange={formik.handleChange}
              name="lname"
              value={formik.values.lname}></input>
          </td>
          {formik.errors.lname && formik.touched.lname && (
            <p>{formik.errors.lname}</p>
          )}
        </tr>
        <tr><td>Enter Phone Number</td>
          <td>
            <input placeholder="Phone Number"
              onChange={formik.handleChange}
              name="Phone"
              value={formik.values.Phone}></input>
          </td>
          {formik.errors.Phone && formik.touched.Phone && (
            <p>{formik.errors.Phone}</p>
          )}
        </tr>
        <tr>
          <td>Enter Email Id</td>
          <td>
            <input placeholder="Email ID"
              onChange={formik.handleChange}
              name="Email"
              value={formik.values.Email}></input>
          </td>
          {formik.errors.Email && formik.touched.Email && (
            <p>{formik.errors.Email}</p>
          )}
        </tr>
        <tr>
          <td>Enter Address</td>
          <td>
            <input placeholder="Address"
              onChange={formik.handleChange}
              name="Address"
              value={formik.values.Address}></input>
          </td>
          {formik.errors.Address && formik.touched.Address && (
            <p>{formik.errors.Address}</p>
          )}
        </tr>
        <tr>
          <td>Enter Password</td>
          <td>
            <input placeholder="Password "
              onChange={formik.handleChange}
              name="Password"
              value={formik.values.Password}></input>
          </td>
          {formik.errors.Password && formik.touched.Password && (
            <p>{formik.errors.Password}</p>
          )}
        </tr>
        <tr>
          <td> Conform Password</td>
          <td>
            <input placeholder="Conform Password "
              onChange={formik.handleChange}
              name="Confpass"
              value={formik.values.Confpass}></input>
          </td>
          {formik.errors.Confpass && formik.touched.Confpass && (
            <p>{formik.errors.Confpass}</p>
          )}
        </tr>
      </table>
      <button style={{ display: display ? "none" : "block" }} onClick={formik.handleSubmit}>Submit</button>
      <button style={{ display: display ? "block" : "none" }} onClick={save}>Save</button>
      <button style={{ display: display ? "block" : "none" }} onClick={canclebtn}>Cancle</button>


      {/* <Link to="AdminLogin"> Admin Login</Link> */}
      {/* </form> */}
    </>

  )

};
export default Registration;
