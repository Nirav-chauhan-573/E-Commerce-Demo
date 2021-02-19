import React, { useState } from 'react';
import AdminNav from "./AdminNavbar";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from 'formik';
import * as Yup from "yup";





const Addcategories = () => {
    let categorys:any = {}

    const [optionData, setOptionData] = useState();
    // let catName: any;
    let myData: any = [];

    const [update, setUpdate] = useState(false);

    let olddata: any = localStorage.getItem('categorys');
    myData = JSON.parse(olddata)
    console.log(optionData)
    console.log(update)




    if (myData === null) {
        myData = [];
        localStorage.setItem("categorys", JSON.stringify(myData));
    }

    const formik: any = useFormik({
        initialValues: {
            catName: "",

        },
        validationSchema: Yup.object({
            catName: Yup.string()
                .min(2, "Mininum 2 characters")
                .required("Required!")

        }),
        onSubmit: values => {
            setOptionData(myData)
            // console.log(optionData)
            myData.push(formik.values.catName)
            // console.log(myData)

            localStorage.setItem("categorys", JSON.stringify(myData));
            categorys[formik.values.catName]=[];
            console.log(categorys)
            // localStorage.setItem("categorys", JSON.stringify(categorys));
            setUpdate(true)
            // console.log(update, "before")
            formik.values.catName = ""
            setUpdate(false)
            // console.log(update, "after")
        }

    })
    // const onchangeeve = (e: any) => {
    //     catName = e.target.value;
    // }
    // const onsubmit = () => {
    // setOptionData(myData)
    // // console.log(optionData)
    // myData.push(catName)
    // console.log(myData)
    // // categorys[catName]=[];

    // // console.log(categorys)
    // localStorage.setItem("categorys", JSON.stringify(myData));
    // // localStorage.setItem("categorys", JSON.stringify(categorys));

    // }
    const tabInput = () => {
        return (
            <>
                <table>
                    <tbody>
                        <tr>
                            <td>Enter Product Categorys : </td>
                            <td>
                                <input type="text" placeholder="Enter Product Chategorys"
                                    onChange={formik.handleChange}
                                    name="catName"
                                    value={formik.values.catName} />
                            </td>
                            {formik.errors.catName && formik.touched.catName && (
                                <p>{formik.errors.catName}</p>
                            )}
                        </tr>
                    </tbody>
                </table>
                <br />
                <button onClick={formik.handleSubmit}>ADD</button>
                <br />
            </>
        )
    }
    const opt = () => {
        // console.log(myData)

        return (
            <>
                {/* { console.log("abcd", myData)} */}

                <Form>
                    <Form.Group controlId="exampleForm.SelectCustom" style={{ width: "200px" }}>
                        <Form.Label>Custom select</Form.Label>
                        <Form.Control as="select" custom>
                            {myData.map((data: any, i: any) => {
                                return (
                                    // console.log("jhhgh",data)

                                    <option key={i}>{data}</option>
                                )
                            }
                            )}
                        </Form.Control>
                    </Form.Group>
                </Form>
            </>

        )

    }



    return (
        <>
            <AdminNav />
            <br />
            <br />
            {tabInput()}
            {opt()}

        </>
    )
}
export default Addcategories;