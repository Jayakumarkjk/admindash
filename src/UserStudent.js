import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';




export function UserStudent({ users, id, deleteButton, editButton }) {
  const navigate = useNavigate();



  return (

<div>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="stu"
        height="240"
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
      <IconButton
        aria-label="info"
        color="primary"
        onClick={() => navigate("/StudentDetail/" + id)}
      >
        <InfoIcon />
      </IconButton>
      {deleteButton}     
      {editButton}

      </CardActions>
    </Card>




    </div>
  );
}
;
