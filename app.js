
const express = require('express');
const app = express();
const path = require('path');
const fs=require('fs')
const port = 8000;

//TO COLLECT FORM DATA
app.use(express.urlencoded())

//To include css in html file do this: css as static file
app.use(express.static(__dirname));

// This does not include css
app.get("/", (req, res)=>{ 
   res.sendFile(path.join(__dirname+'/index.html'));
});

app.get("/contact", (req, res)=>{ 
   res.sendFile(path.join(__dirname+'/contact.html'));
});

//Post method for taking form data
app.post("/", (req, res)=>{ 
    const formData=`The name of the student is " ${req.body.name}", "${req.body.gender}", Contact number is "${req.body.contact_number}" , eMail is "${req.body.mail}" and address is "${req.body.address}"`;
    fs.writeFileSync('formdata.txt', formData);
    res.status(200).sendFile(path.join(__dirname+'/index.html'));
    
 });

//Creating server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
