import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { UserTeacher } from "./UserTeacher";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from 'axios';





export function TeachersList() {
    const [user, setUser] = useState([]);
    // useEffect(() =>{
    //   fetch("https://6401ca170a2a1afebef22a4a.mockapi.io/users", {
    //     method: "GET",
    //   })
    //   .then((res) => res.json())
    //   .then((data1) => {
    //     setUser(data1);
    
    //   });
    // }, []);
    const getDetail = () => {
      axios.get("https://6401c97d3779a862625e0dbc.mockapi.io/Teachers")
          .then((res) => setUser(res.data));
  }

    const navigate = useNavigate();
    useEffect(() => getDetail(), [])

return( 

    
    <div>
        <div className='users-list'>
            {/* {user.map((userList)=>(
                <Users  users={userList}/> */}
                {user.map((dt1, index)=>(
                  <UserTeacher  key= {index} users={dt1} id={dt1.id} 
                  
                  deleteButton={
                    <IconButton
                      color="error"
                      aria-label="deleteButton"
                      onClick={() => {
                        axios.delete(`https://6401c97d3779a862625e0dbc.mockapi.io/Teachers/${dt1.id}`, 
                         )
                          .then(() => getDetail());
                        
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                  editButton={
                    <IconButton
                      color="secondary"
                      aria-label="editButton"
                      onClick={() => navigate(`/edittea/${dt1.id}`)}
                    >
                      <EditIcon />
                    </IconButton>
                  }
                  />
            ))}

        </div>

    </div>

);

}
