import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';



export function TeacherDetail() {
  const [users, setUsers] = useState({});
  const { userid } = useParams();

  const navigate = useNavigate;

  useEffect(() =>{
    axios.get(`https://6401c97d3779a862625e0dbc.mockapi.io/Teachers/${userid}`)
    .then((dtl) => {
      setUsers(dtl.data);
    });
  });
 
  return (
    <div>
    <div className="beh">

<div>
<Card className="detail" sx={{ maxWidth: 50 }}>
      <CardMedia
        component="img"
        alt="stu"
        height="100"
        image={users.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {users.name} 
        </Typography>
        <Typography variant="body1" color="text.primary">
        {users.department}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {users.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {users.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {users.address}
        </Typography>
      </CardContent>
      <CardActions>
     
      <Button 
 color="primary" 
 variant="primary"
 onClick={() => navigate(-1)}>
            <ArrowBackIosIcon /> BACK
        </Button>

      </CardActions>
    </Card>

  
</div>

</div>

</div>



);

}



