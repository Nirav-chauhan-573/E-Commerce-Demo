import React, { useState } from 'react';
import AdminNav from "./AdminNavbar";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const AddSubCategories = () => {
    let subcategory: any = {}
    let getoldParse: any = localStorage.getItem('SubCat');
    let getOld: any = JSON.parse(getoldParse);
    console.log(getOld)
    let newItem: any = [];
    newItem = getOld;
    let olddata: any = localStorage.getItem('categorys');
    let myData = JSON.parse(olddata)
    const [inputdata, setinput] = useState([])

    // const [dropDownData, setdropdown] = useState([])
    const [subCat, setSubCat] = useState([]);
    if (myData === null) {
        myData = [];
        localStorage.setItem("categorys", JSON.stringify(myData));
    }
    if (getOld === null) {
        getOld = [];
        localStorage.setItem("SubCat", JSON.stringify(getOld));
    }

    const onchangeeve = (e: any) => {
        setinput(e.target.value)
        console.log(inputdata);
    }

    const selected = (e: any) => {
        console.log(inputdata);
        subcategory[e.target.value] = [inputdata];
        setSubCat(subcategory);
        console.log(subcategory);
    }
    const onsubmit = (e: any) => {
        console.log(subCat);
        // console.log(newItem[0].Footwear)
        newItem.push(subCat)
        // let abc = newItem[0].Footwear.push("123")
        // console.log(abc)
        console.log(newItem[0].Footwear)

        localStorage.setItem("SubCat", JSON.stringify(newItem));

    }

    return (
        <>
            <AdminNav />
            <br />
            <br />
            <h3>Enter Sub Category</h3>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>  <Form>
                            <Form.Group controlId="exampleForm.SelectCustom" style={{ width: "200px" }}>

                                <Form.Control as="select" custom onChange={selected}>
                                    {myData && myData.map((data: any, i: any) => {
                                        return (


                                            <option key={i}>{data}</option>

                                        )
                                    }
                                    )}
                                </Form.Control>
                            </Form.Group>
                        </Form> </td>
                      <td>  <input type="text" placeholder="Enter Product Sub Categorys"
                            onChange={onchangeeve}
                            name="CatName"
                            style={{ width: "350px" }}
                        ></input></td>
                    </tr>
                </tbody>
            </table>


            <br />
            <button onClick={onsubmit}>ADD</button>
            <br />
  
        </>
    )
}
export default AddSubCategories;