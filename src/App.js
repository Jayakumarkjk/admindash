import React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route,  useNavigate } from "react-router-dom";
import { AddStudent } from './AddStudent';
import { EditStudent } from './EditStudent';
import { StudentDetail } from './StudentDetail';
import { StudentList } from './StudentList';
import { Home } from './Home';
import { AddTeacher } from './AddTeacher';
import { TeacherDetail } from './TeacherDetail';
import { TeachersList } from './TeachersList';
import { EditTeacher } from './EditTeacher';


function App() { 
  const [user, setUser] = useState([]);
  const [mode, setMode] = useState("light");
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>

    <div> 

<AppBar position='static'>
        <Toolbar>
          

    <Button color="inherit" onClick={()=> navigate ("/")}>Home</Button>
    <Button color="inherit" onClick={()=> navigate ("/students")}>StudentList</Button>
    <Button color="inherit" onClick={()=> navigate ("/teachers")}>TeachersList</Button>
    <Button color="inherit" onClick={()=> navigate ("/addstudent")}>Add Student</Button>
    <Button color="inherit" onClick={()=> navigate ("/addteacher")}>Add Teacher</Button>



<Button startIcon={mode==="dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    color="inherit" onClick={()=> setMode (mode === "light" ? "dark" : "light")}
      >{mode==="light" ? "dark" : "light"} Mode</Button>
      </Toolbar>
      </AppBar>
    
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/students" element={<StudentList />}></Route>
      <Route path="/teachers" element={<TeachersList />}></Route>
      <Route path="/Studentdetail/:userid" element={<StudentDetail />}></Route>
      <Route path="/Teacherdetail/:userid" element={<TeacherDetail />}></Route>
      <Route path="/addstudent" element={<AddStudent user={user}  setUser={setUser} />}></Route>
      <Route path="/addteacher" element={<AddTeacher user={user}  setUser={setUser} />}></Route>
      <Route path="/edittea/:userid" element={<EditTeacher />}></Route>
      <Route path="/editstu/:userid" element={<EditStudent />}></Route>




      </Routes>
      </div>

      </ThemeProvider>



  );
}




export default App;
