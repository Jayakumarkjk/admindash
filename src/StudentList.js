import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { UserStudent } from "./UserStudent";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from 'axios';

export function StudentList() {
    const [user, setUser] = useState([]);
   
    const getDetail = () => {
      axios.get("https://641f060ef228f1a83eaee346.mockapi.io/adminlist",
          )
          .then((res) => setUser(res.data));
  }

    const navigate = useNavigate();
    useEffect(() => getDetail(), [])

return( 

    
    <div>
        <div className='users-list'>
           
                {user.map((dt1, index)=>(
                  <UserStudent  key= {index} users={dt1} id={dt1.id} 
                  
                  deleteButton={
                    <IconButton
                      color="error"
                      aria-label="deleteButton"
                      onClick={() => {
                        axios.delete(`https://641f060ef228f1a83eaee346.mockapi.io/adminlist/${dt1.id}`, 
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
                      onClick={() => navigate(`/editstu/${dt1.id}`)}
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
