import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import axios from 'axios';



export function EditStudent() {
    const { userid } = useParams();
    const [users, setUsers] = useState(null);

    useEffect(() => {
        axios.get(`https://641f060ef228f1a83eaee346.mockapi.io/adminlist/${userid}` )
            .then((dt1data) => {
                setUsers(dt1data.data);
            });
    }, []);
    return users ? <EditStudentForm users={users}/> : "Please wait........!!!"



function EditStudentForm({users}) {
    const [name, setName] = useState(users.name);
    const [department, setDepartment] = useState(users.department);
    const [email, setEmail] = useState(users.email);
    const [phone, setPhone] = useState(users.phone);
    const [address, setAddress] = useState(users.address);
    const [image, setImage] = useState(users.image);

    
    const navigate = useNavigate();

    return (
       <div className="add-user-form" style={{marginLeft:'50px',marginTop:'50px'}}>
         <h1 style={{color: "blue", fontWeight: 'bolder', fontFamily: 'fantasy'}}>Edit user details </h1><br/>
           
            <TextField
                 label="Name"
                variant="outlined"
                onChange={(event) => setName(event.target.value)}
                type="text"
                placeholder="Enter your name"
                value={name}
                style={{width:'800px'}}
            /><br/><br/>
            <TextField
                 label="Department"
                variant="outlined"
                onChange={(event) => setDepartment(event.target.value)}
                type="text"
                placeholder="Enter your department"
                value={department}
                style={{width:'800px'}}
            /><br/><br/>
            <TextField
                label="Email"
                variant="outlined"
                onChange={(event) => setEmail(event.target.value)}
                type="text"
                placeholder="Enter your email"
                value={email}
                style={{width:'800px'}}
            /><br/><br/>
            <TextField
                 label="Phone"
                variant="outlined"
                onChange={(event) => setPhone(event.target.value)}
                type="text"
                placeholder="Enter your phone"
                value={phone}
                style={{width:'800px'}}
            /><br/><br/>
            <TextField
                label="Address"
                variant="outlined"
                onChange={(event) => setAddress(event.target.value)}
                type="text"
                placeholder="Enter your address"
                value={address}
                style={{width:'800px'}}
            /><br/><br/>
            <TextField
                label="Image"
                variant="outlined"
                onChange={(event) => setImage(event.target.value)}
                type="text"
                placeholder="Enter your URL"
                value={image}
                style={{width:'800px'}}
            /><br/><br/>
            <Button
                color="primary"
                variant="contained"
                onClick={
                    () => {
                        const updatedUser = {
                            name: name,
                            department: department,
                            email: email,
                            phone: phone,
                            address: address,
                            image: image,
                        };
                        axios.put(`https://641f060ef228f1a83eaee346.mockapi.io/adminlist/${users.id}`, (updatedUser))
                        .then((res) => {
                            console.log(res)
                            setUsers(res.data)
                            navigate("/students")
                            });
                            }
                    }
                
            >
             SAVE
            </Button>&nbsp;&nbsp;

            <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
                <ArrowBackIosIcon /> BACK
            </Button>
        </div>
    )
}}