import React, { useState } from 'react';
import ProductNav from './ProductNavbar';
// import { MdDelete } from 'react-icons/md';
import { GrEdit } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';
import Table from "react-bootstrap/Table";

const Profile = () => {

    let newItem: any = [];

    let getold: any = localStorage.getItem('user')
    let oldItemsparse: any = JSON.parse(getold)
    console.log(oldItemsparse)

    let oldUserName: any = localStorage.getItem('UserName')
    let oldUserNameparse: any = JSON.parse(oldUserName)
    console.log(oldUserNameparse)


    const [user, setuser] = useState({})
    const [display, setdisplay] = useState(false);

    // const [id, setid]=useState("")
    const profile: any = {
        fname: "",
        lname: "",
        Phone: "",
        Email: "",
        Address: "",
        Password: "",
        Confpass: "",
    }
    const save = (e: any) => {
        // e.stopPropagation();
        setdisplay(false);
        // console.log(display, "display")
        newItem = { ...profile, [e.target.name]: e.target.value }
        // console.log(id + " id")
        console.log(newItem)
        // oldItemsparse[id] = newItem;
        // console.log(oldItemsparse[id])
        // console.log(oldItemsparse)
        // localStorage.setItem("user", JSON.stringify(oldItemsparse));

        profile.fname = ""
        profile.lname = ""
        profile.Phone = ""
        profile.Email = ""
        profile.Address = ""
        profile.Password = ""
        profile.Confpass = ""
        // setdisplay(true);

    }
    const cancle=()=>{
        setdisplay(false)
    }

    const onchange = (e: any) => {
        setuser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }
    return (
        <>
            <ProductNav />
            <h1>Profile </h1>
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
                            if (object.fname === oldUserNameparse) {
                                profile.fname = object.fname
                                profile.lname = object.lname
                                profile.Phone = object.Phone
                                profile.Email = object.Email
                                profile.Address = object.Address
                                profile.Password = object.Password
                                profile.Confpass = object.Confpass
                                return (

                                    <tr key={i}
                                        onClick={() => {
                                            // setid(i);
                                            // return id;
                                        }}>
                                        <td>{object.fname}</td>
                                        <td>{object.lname}</td>
                                        <td>{object.Email}</td>
                                        <td><GrEdit onClick={() => {
                                            setdisplay(true);
                                            // setupdate(true)

                                            // profile.fname = object.fname
                                            // profile.lname = object.lname
                                            // profile.Phone = object.Phone
                                            // profile.Email = object.Email
                                            // profile.Address = object.Address
                                            // profile.Password = object.Password
                                            // profile.Confpass = object.Confpass

                                        }} /></td>
                                        {/* <td><MdDelete/></td> */}
                                    </tr>

                                );
                            }
                        })

                    }
                </tbody>
            </Table>
            {/* <GrEdit /> */}
            {/* <div style={{ display: "grid" }}> */}
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <input placeholder="Frist Name"
                                onChange={e => onchange(e)}
                                name="fname"
                                value={profile.fname}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input placeholder="Last Name"
                                onChange={e => onchange(e)}
                                name="lname"
                                value={profile.lname}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input placeholder="Address"
                                onChange={e => onchange(e)}
                                name="Address"
                                value={profile.Address}>
                            </input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input placeholder="Phone"
                                onChange={e => onchange(e)}
                                name="Phone"
                                value={profile.Phone}>
                            </input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input placeholder="Email"
                                onChange={e => onchange(e)}

                                name="Email"
                                value={profile.Email}>
                            </input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input placeholder="Password"
                                onChange={e => onchange(e)}
                                name="Password"
                                value={profile.Password}>
                            </input>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <button style={{ display: display ? "inline-block" : "none" }} onClick={save}>Save</button>
                <button style={{ display: display ? "inline-block" : "none" }} onClick={cancle}>Cancle</button>


            {/* </div> */}

        </>
    )
}
export default Profile;
