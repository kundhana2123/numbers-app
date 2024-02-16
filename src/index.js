<<<<<<< HEAD
import { getNumbers, subtractNumbers } from "./arithmetica.js";
=======
import {  getNumbers, subtractNumbers } from "./arithmetica.js";

>>>>>>> refs/remotes/origin/main
const express =require('express') 
const cors = require('cors')
const app=express()
const port =3000
app.use(cors());
app.get('/:a/:b',(req,res)=>{
    console.log(getNumbers(req.params.a, req.params.b))
    res.json({"Sum":getNumbers(req.params.a, req.params.b)});})
    app.listen(
        3000, 
        () => console.log(`Server listening on port 3000.`));



// function getNumbers(a,b) {
// return parseInt(a)+parseInt(b);
// }

