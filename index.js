const express = require("express");
const app = express();
const PORT = 3000;
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
let favMovie = []
app.get("/",(req,res)=>{
    res.render("index",{favMovie});
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})
app.post("/",(req,res)=>{
    const newMovie = req.body.favMovie;
    favMovie.push(newMovie);
    res.redirect("/");
})

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})